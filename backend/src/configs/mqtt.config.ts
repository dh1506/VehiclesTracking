// backend/src/services/mqtt.service.ts
import mqtt from 'mqtt';
import { env } from './env.config.js';
import { prisma } from './db.config.js';
import { emitVehicleLocation, emitVehicleAlert, emitVehicleStatus } from './socket.config.js';

const TOPIC_LOC = 'gps/location';
const TOPIC_ALERT = 'gps/alert';
const TOPIC_PING = 'gps/ping';

/**
 * Phân tích và truy vết vehicleId dựa trên clientId (MQTT Connection ID) hoặc data payload
 */
const getVehicleId = async (clientId: string, data: any): Promise<number | null> => {
  // 1️⃣ Bóc tách clientId biến thiên (Ví dụ: "tuan_bike_10230" -> tách lấy tiền tố "tuan_bike")
  if (clientId && clientId !== 'unknown') {
    const prefix = clientId.split('_').slice(0, -1).join('_'); // Cắt bỏ phần đuôi số ngẫu nhiên sinh ra bởi millis()
    const targetSerialNumber = prefix || clientId;

    const device = await prisma.iotDevice.findFirst({
      where: {
        OR: [
          { serialNumber: targetSerialNumber },
          { serialNumber: clientId } // Đề phòng trường hợp dùng ID tĩnh không có đuôi số
        ]
      },
      include: { assignments: { where: { isActive: true } } }
    });

    if (device?.assignments[0]?.vehicleId) {
      return device.assignments[0].vehicleId;
    }
  }

  // 2️⃣ Kiểm tra nếu trong gói tin JSON có đính kèm trực tiếp thông tin nhận diện
  if (data?.serialNumber) {
    const device = await prisma.iotDevice.findUnique({
      where: { serialNumber: data.serialNumber },
      include: { assignments: { where: { isActive: true } } }
    });
    if (device?.assignments[0]?.vehicleId) return device.assignments[0].vehicleId;
  }

  // 3️⃣ Fallback dự phòng: lấy thiết bị online gần nhất
  const recentDevice = await prisma.iotDevice.findFirst({
    where: { status: 'online', assignments: { some: { isActive: true } } },
    orderBy: { lastOnlineAt: 'desc' },
    include: { assignments: { where: { isActive: true } } }
  });

  if (recentDevice?.assignments[0]?.vehicleId) return recentDevice.assignments[0].vehicleId;
  return null;
};

/**
 * Khớp và kiểm tra tính hợp lệ của dữ liệu GPS
 */
const validateGpsData = (data: any): boolean => {
  return (
    typeof data.lat === 'number' &&
    typeof data.lon === 'number' &&
    data.lat >= -90 && data.lat <= 90 &&
    data.lon >= -180 && data.lon <= 180
  );
};

export const initMqtt = () => {
  console.log(`📡 Đang kết nối tới MQTT Broker: ${env.MQTT_BROKER_URL}...`);
  const client = mqtt.connect(env.MQTT_BROKER_URL);

  client.on('connect', () => {
    console.log('✅ Đã kết nối MQTT Broker thành công');
    client.subscribe([TOPIC_LOC, TOPIC_ALERT, TOPIC_PING], (err) => {
      if (err) console.error('Lỗi subscribe MQTT:', err);
      else console.log('✅ Đã subscribe các topics gps/#');
    });
  });

  client.on('message', async (topic, message) => {
    try {
      const payloadString = message.toString();
      const data = JSON.parse(payloadString);
      
      // Lấy Client ID từ tùy chọn kết nối của thiết bị đang gửi tin
      const clientId = client.options.clientId || 'unknown';

      // Định danh xe
      const vehicleId = await getVehicleId(clientId, data);
      if (!vehicleId) {
        console.warn(`⚠️ Không tìm được xe tương ứng cho thiết bị kết nối với Client ID: ${clientId}`);
        return;
      }

      // XỬ LÝ KÊNH 1: GỬI TỌA ĐỘ ĐỊNH VỊ XE (gps/location)
      if (topic === TOPIC_LOC) {
        if (!validateGpsData(data)) {
          console.warn(`⚠️ Dữ liệu GPS không hợp lệ: ${payloadString}`);
          return;
        }

        // Lưu bản ghi vào nhật ký GPS
        await prisma.gpsLog.create({
          data: {
            vehicleId,
            latitude: data.lat,
            longitude: data.lon,
            speedKmh: data.speed || 0,
            gpsStatus: 'online',
            homeLatitude: data.hLat,
            homeLongitude: data.hLon,
            distanceFromHome: data.dist
          }
        });

        // Phát tín hiệu Socket.io thời gian thực cho màn hình giám sát Web
        emitVehicleLocation(vehicleId, data);
      }

      // XỬ LÝ KÊNH 2: CẢNH BÁO SỰ CỐ KHẨN (gps/alert)
      else if (topic === TOPIC_ALERT) {
        const alertType = data.alert;

        if (alertType === 'NORMAL') {
          // Giải tỏa cảnh báo cũ của xe
          await prisma.vehicleAlert.updateMany({
            where: { vehicleId, resolvedAt: null },
            data: { resolvedAt: new Date(), isAcknowledged: true }
          });
          emitVehicleAlert(vehicleId, { alert: 'NORMAL' });
        } 
        else if (alertType === 'ACCIDENT' || alertType === 'IMPACT' || alertType === 'OUT_OF_ZONE') {
          
          let alertLat = data.lat;
          let alertLon = data.lon;

          // 🌟 GIẢI PHÁP SỬA LỖI 2: Nếu cảnh báo OUT_OF_ZONE thiếu tọa độ, lấy tọa độ mới nhất của xe trong DB
          if (alertType === 'OUT_OF_ZONE' && (!alertLat || !alertLon)) {
            const latestLog = await prisma.gpsLog.findFirst({
              where: { vehicleId },
              orderBy: { recordedAt: 'desc' }
            });
            if (latestLog) {
              alertLat = Number(latestLog.latitude);
              alertLon = Number(latestLog.longitude);
            }
          }

          // Lưu cảnh báo sự cố vào Database
          await prisma.vehicleAlert.create({
            data: {
              vehicleId,
              alertType: alertType === 'ACCIDENT' ? 'accident' : 
                        alertType === 'IMPACT' ? 'impact' : 'out_of_zone',
              latitude: alertLat || null,
              longitude: alertLon || null,
              alertMessage: `⚠️ Xe vượt ranh giới an toàn cho phép (${data.dist ? data.dist.toFixed(0) : 'N/A'}m)`
            }
          });

          // Bắn Socket.io cập nhật còi hú khẩn cấp cho trang Web điều hành
          emitVehicleAlert(vehicleId, {
            alert: alertType,
            lat: alertLat,
            lon: alertLon,
            dist: data.dist
          });

          console.log(`🚨 Cảnh báo hệ thống: [${alertType}] nhận được từ xe ID ${vehicleId}`);
        }
      }

      // XỬ LÝ KÊNH 3: NHỊP TIM GIỮ KẾT NỐI (gps/ping)
      else if (topic === TOPIC_PING) {
        const device = await prisma.iotDevice.findFirst({
          where: {
            assignments: { some: { vehicleId, isActive: true } }
          }
        });

        if (device) {
          await prisma.iotDevice.update({
            where: { deviceId: device.deviceId },
            data: { lastOnlineAt: new Date(), status: 'online' }
          });
        }

        emitVehicleStatus(vehicleId, 'online');
      }

    } catch (error) {
      console.error('❌ Lỗi hệ thống khi xử lý MQTT message:', error);
    }
  });

  client.on('error', (err) => {
    console.error('❌ Lỗi kết nối MQTT Client:', err);
  });

  client.on('disconnect', () => {
    console.log('⚠️ Mất liên kết kết nối MQTT Broker');
  });
};