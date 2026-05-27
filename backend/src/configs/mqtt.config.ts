import mqtt from 'mqtt';
import { env } from './env.config.js';
import { prisma } from './db.config.js';
import { emitVehicleLocation, emitVehicleAlert, emitVehicleStatus } from './socket.config.js';

const TOPIC_LOC = 'gps/location';
const TOPIC_ALERT = 'gps/alert';
const TOPIC_PING = 'gps/ping';

/**
 * Lấy vehicleId từ payload (nếu Arduino gửi serial/sim/deviceId) hoặc fallback tới device online gần nhất
 */
const getVehicleId = async (payload: any, data: any): Promise<number | null> => {
  // 1️⃣ Nếu payload có serialNumber -> lookup theo serialNumber
  if (payload.serialNumber && typeof payload.serialNumber === 'string') {
    const device = await prisma.iotDevice.findUnique({
      where: { serialNumber: payload.serialNumber },
      include: { assignments: { where: { isActive: true } } }
    });
    if (device?.assignments[0]?.vehicleId) return device.assignments[0].vehicleId;
  }

  // 2️⃣ Nếu payload có simNumber -> lookup theo simNumber
  if (payload.simNumber && typeof payload.simNumber === 'string') {
    const device = await prisma.iotDevice.findFirst({
      where: { simNumber: payload.simNumber },
      include: { assignments: { where: { isActive: true } } }
    });
    if (device?.assignments[0]?.vehicleId) return device.assignments[0].vehicleId;
  }

  // 3️⃣ Nếu payload có deviceId (numeric) -> lookup theo PK
  if (payload.deviceId && (typeof payload.deviceId === 'number' || !Number.isNaN(Number(payload.deviceId)))) {
    const id = Number(payload.deviceId);
    const device = await prisma.iotDevice.findUnique({
      where: { deviceId: id },
      include: { assignments: { where: { isActive: true } } }
    });
    if (device?.assignments[0]?.vehicleId) return device.assignments[0].vehicleId;
  }

  // 4️⃣ Fallback: lấy device online gần nhất có assignment active
  const recentDevice = await prisma.iotDevice.findFirst({
    where: { status: 'online', assignments: { some: { isActive: true } } },
    orderBy: { lastOnlineAt: 'desc' },
    include: { assignments: { where: { isActive: true } } }
  });

  if (recentDevice?.assignments[0]?.vehicleId) return recentDevice.assignments[0].vehicleId;
  return null;
};

/**
 * Validate dữ liệu GPS từ Arduino
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
      const clientId = client.options.clientId || 'unknown';

      // ✅ Lấy vehicleId từ payload hoặc last active device
      const vehicleId = await getVehicleId(clientId, data);
      if (!vehicleId) {
        console.warn(`⚠️ Không tìm được xe tương ứng với message từ ${clientId}`);
        return;
      }

      if (topic === TOPIC_LOC) {
        // Validate GPS data
        if (!validateGpsData(data)) {
          console.warn(`⚠️ Dữ liệu GPS không hợp lệ: ${payloadString}`);
          return;
        }

        // Lưu GPS log
        const gpsLog = await prisma.gpsLog.create({
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

        // Emit real-time location cho clients
        emitVehicleLocation(vehicleId, data);
      }

      else if (topic === TOPIC_ALERT) {
        const alertType = data.alert;

        if (alertType === 'NORMAL') {
          // Xóa alert trước đó nếu có
          await prisma.vehicleAlert.updateMany({
            where: { vehicleId, resolvedAt: null },
            data: { resolvedAt: new Date() }
          });
          emitVehicleAlert(vehicleId, { alert: 'NORMAL' });
        } else if (alertType === 'ACCIDENT' || alertType === 'IMPACT' || alertType === 'OUT_OF_ZONE') {
          // Validate dữ liệu alert
          if (alertType === 'ACCIDENT' && !validateGpsData(data)) {
            console.warn(`⚠️ Dữ liệu ACCIDENT không hợp lệ`);
            return;
          }

          // Lưu alert
          const alertRecord = await prisma.vehicleAlert.create({
            data: {
              vehicleId,
              alertType: alertType === 'ACCIDENT' ? 'accident' : 
                        alertType === 'IMPACT' ? 'impact' : 'out_of_zone',
              latitude: data.lat,
              longitude: data.lon,
              alertMessage: `⚠️ ${alertType}`
            }
          });

          // Emit alert cho clients
          emitVehicleAlert(vehicleId, data);

          console.log(`🚨 Alert: ${alertType} cho xe ID ${vehicleId}`);
        }
      }

      else if (topic === TOPIC_PING) {
        // Cập nhật last_online_at của device
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
      console.error('❌ Lỗi xử lý MQTT message:', error);
    }
  });

  client.on('error', (err) => {
    console.error('❌ Lỗi MQTT Client:', err);
  });

  client.on('disconnect', () => {
    console.log('⚠️ Mất kết nối MQTT Broker');
  });
};
