
import mqtt from 'mqtt';
import { env } from './env.config.js';
import { prisma } from './db.config.js';
import {
  emitVehicleLocation,
  emitVehicleAlert,
  emitVehicleStatus
} from './socket.config.js';

const TOPIC_LOC = 'gps/location';
const TOPIC_ALERT = 'gps/alert';
const TOPIC_PING = 'gps/ping';

// ====================================================
// HAVERSINE - Tính khoảng cách giữa 2 tọa độ GPS (mét)
// ====================================================
const haversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371000; // Bán kính Trái Đất (mét)
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Track trạng thái in/out zone từng xe để tránh tạo alert trùng lặp
// key: vehicleId, value: true = đang vi phạm (out), false = trong vùng
const vehicleOutOfZoneState = new Map<number, boolean>();

const validateGpsData = (data: any): boolean => {
  return (
    typeof data.lat === 'number' &&
    typeof data.lon === 'number' &&
    data.lat >= -90 &&
    data.lat <= 90 &&
    data.lon >= -180 &&
    data.lon <= 180
  );
};

const getVehicleId = async (
  data: any
): Promise<number | null> => {

  if (!data?.serialNumber) {
    return null;
  }

  const device = await prisma.iotDevice.findUnique({
    where: {
      serialNumber: data.serialNumber
    },
    include: {
      assignments: {
        where: {
          isActive: true
        }
      }
    }
  });

  if (!device) {
    return null;
  }

  return device.assignments[0]?.vehicleId ?? null;
};

const getLatestGeofence = async () => {
  return prisma.geofence.findFirst({
    orderBy: {
      createdAt: 'desc'
    }
  });
};

export const initMqtt = () => {

  console.log(
    `📡 Đang kết nối MQTT Broker: ${env.MQTT_BROKER_URL}`
  );

  mqttClient =
  mqtt.connect(env.MQTT_BROKER_URL);

  const client = mqttClient;

  client.on('connect', () => {

    console.log('✅ MQTT Connected');

    client.subscribe(
      [
        TOPIC_LOC,
        TOPIC_ALERT,
        TOPIC_PING
      ],
      (err) => {

        if (err) {
          console.error(
            '❌ MQTT Subscribe Error:',
            err
          );
        } else {
          console.log(
            '✅ Subscribe gps/# thành công'
          );
        }
      }
    );
  });

  client.on(
    'message',
    async (topic, message) => {

      try {

        const payloadString =
          message.toString();

        const data =
          JSON.parse(payloadString);

        const vehicleId =
          await getVehicleId(data);

        if (!vehicleId) {

          console.warn(
            `⚠️ Không tìm thấy vehicle cho serialNumber: ${data?.serialNumber}`
          );

          return;
        }

        // =====================================================
        // GPS LOCATION
        // =====================================================

        if (topic === TOPIC_LOC) {

          if (!validateGpsData(data)) {

            console.warn(
              '⚠️ GPS data invalid:',
              payloadString
            );

            return;
          }

          console.log(`📡 [GPS RECEIVED] Xe ID: ${vehicleId} | Lat: ${data.lat}, Lon: ${data.lon} | Tốc độ thô từ thiết bị: ${data.speed} | Payload:`, payloadString);

          const rawSpeed = Number(data.speed);
          const speedKmh = isNaN(rawSpeed) ? 0 : Math.min(Math.max(rawSpeed, 0), 999.99);

          await prisma.gpsLog.create({
            data: {
              vehicleId,
              latitude: data.lat,
              longitude: data.lon,
              speedKmh,
              gpsStatus: 'online',
              distanceFromHome: data.dist,
              homeLatitude: data.hLat,
              homeLongitude: data.hLon
            }
          });

          emitVehicleLocation(
            vehicleId,
            data
          );

          // =====================================================
          // SERVER-SIDE GEOFENCE CHECK
          // Kiểm tra xe có ra ngoài vùng giám sát không
          // =====================================================
          try {
            const activeGeofence = await getLatestGeofence();

            if (
              activeGeofence &&
              activeGeofence.centerLat !== null &&
              activeGeofence.centerLon !== null &&
              activeGeofence.radiusMeter !== null
            ) {
              const geoLat = Number(activeGeofence.centerLat);
              const geoLon = Number(activeGeofence.centerLon);
              const geoRadius = Number(activeGeofence.radiusMeter);

              const distance = haversineDistance(data.lat, data.lon, geoLat, geoLon);
              const isOutside = distance > geoRadius;
              const wasOutside = vehicleOutOfZoneState.get(vehicleId) ?? false;

              if (isOutside && !wasOutside) {
                // Xe vừa RA KHỎI vùng → tạo alert mới
                vehicleOutOfZoneState.set(vehicleId, true);

                await prisma.vehicleAlert.create({
                  data: {
                    vehicleId,
                    alertType: 'out_of_zone',
                    latitude: data.lat,
                    longitude: data.lon,
                    alertMessage: `⚠️ Xe vượt khỏi vùng giám sát "${activeGeofence.geofenceName}" (cách tâm ${Math.round(distance)}m, giới hạn ${Math.round(geoRadius)}m)`
                  }
                });

                await prisma.vehicleGeofenceLog.create({
                  data: {
                    vehicleId,
                    geofenceId: activeGeofence.geofenceId,
                    eventType: 'exit',
                    latitude: data.lat,
                    longitude: data.lon
                  }
                });

                emitVehicleAlert(vehicleId, {
                  alert: 'OUT_OF_ZONE',
                  lat: data.lat,
                  lon: data.lon,
                  dist: Math.round(distance),
                  geofenceName: activeGeofence.geofenceName
                });

                console.log(`🚨 [GEOFENCE] Xe ${vehicleId} RA KHỎI vùng "${activeGeofence.geofenceName}" | Khoảng cách: ${Math.round(distance)}m > ${Math.round(geoRadius)}m`);

              } else if (!isOutside && wasOutside) {
                // Xe vừa VÀO LẠI vùng → cập nhật trạng thái + ghi log enter
                vehicleOutOfZoneState.set(vehicleId, false);

                await prisma.vehicleGeofenceLog.create({
                  data: {
                    vehicleId,
                    geofenceId: activeGeofence.geofenceId,
                    eventType: 'enter',
                    latitude: data.lat,
                    longitude: data.lon
                  }
                });

                // Tự động resolve các alert out_of_zone chưa xử lý
                await prisma.vehicleAlert.updateMany({
                  where: {
                    vehicleId,
                    alertType: 'out_of_zone',
                    resolvedAt: null
                  },
                  data: {
                    resolvedAt: new Date(),
                    isAcknowledged: true
                  }
                });

                emitVehicleAlert(vehicleId, { alert: 'NORMAL' });

                console.log(`✅ [GEOFENCE] Xe ${vehicleId} VÀO LẠI vùng "${activeGeofence.geofenceName}"`);
              }
            }
          } catch (geoErr) {
            console.error('❌ [GEOFENCE CHECK ERROR]:', geoErr);
          }

          return;
        }

        // =====================================================
        // ALERT
        // =====================================================

        if (topic === TOPIC_ALERT) {

          const alertType =
            data.alert;

          if (!alertType) {
            return;
          }

          // -------------------------------------
          // NORMAL
          // -------------------------------------

          if (alertType === 'NORMAL') {

            await prisma.vehicleAlert.updateMany({
              where: {
                vehicleId,
                resolvedAt: null
              },
              data: {
                resolvedAt: new Date(),
                isAcknowledged: true
              }
            });

            const latestGeofence =
              await getLatestGeofence();

            if (latestGeofence) {

              const lastExit =
                await prisma.vehicleGeofenceLog.findFirst({
                  where: {
                    vehicleId,
                    geofenceId:
                      latestGeofence.geofenceId,
                    eventType: 'exit'
                  },
                  orderBy: {
                    createdAt: 'desc'
                  }
                });

              if (lastExit) {

                await prisma.vehicleGeofenceLog.create({
                  data: {
                    vehicleId,
                    geofenceId:
                      latestGeofence.geofenceId,
                    eventType: 'enter',
                    latitude:
                      lastExit.latitude,
                    longitude:
                      lastExit.longitude
                  }
                });
              }
            }

            emitVehicleAlert(
              vehicleId,
              {
                alert: 'NORMAL'
              }
            );

            return;
          }

          // -------------------------------------
          // ACCIDENT / IMPACT / OUT_OF_ZONE
          // -------------------------------------

          if (
            alertType === 'ACCIDENT' ||
            alertType === 'IMPACT' ||
            alertType === 'OUT_OF_ZONE'
          ) {

            let alertLat =
              data.lat;

            let alertLon =
              data.lon;

            if (
              alertType === 'OUT_OF_ZONE' &&
              (!alertLat || !alertLon)
            ) {

              const latestGps =
                await prisma.gpsLog.findFirst({
                  where: {
                    vehicleId
                  },
                  orderBy: {
                    recordedAt: 'desc'
                  }
                });

              if (latestGps) {

                alertLat =
                  Number(
                    latestGps.latitude
                  );

                alertLon =
                  Number(
                    latestGps.longitude
                  );
              }
            }

            const mappedAlertType =
              alertType === 'ACCIDENT'
                ? 'accident'
                : alertType === 'IMPACT'
                ? 'impact'
                : 'out_of_zone';

            await prisma.vehicleAlert.create({
              data: {
                vehicleId,
                alertType:
                  mappedAlertType,
                latitude:
                  alertLat ?? null,
                longitude:
                  alertLon ?? null,
                alertMessage:
                  alertType === 'OUT_OF_ZONE'
                    ? `⚠️ Xe vượt geofence (${data.dist ?? 'N/A'}m)`
                    : `⚠️ ${alertType}`
              }
            });

            if (
              alertType === 'OUT_OF_ZONE'
            ) {

              const latestGeofence =
                await getLatestGeofence();

              if (latestGeofence) {

                await prisma.vehicleGeofenceLog.create({
                  data: {
                    vehicleId,
                    geofenceId:
                      latestGeofence.geofenceId,
                    eventType: 'exit',
                    latitude:
                      alertLat,
                    longitude:
                      alertLon
                  }
                });
              }
            }

            emitVehicleAlert(
              vehicleId,
              {
                alert: alertType,
                lat: alertLat,
                lon: alertLon,
                dist: data.dist
              }
            );

            console.log(
              `🚨 ALERT ${alertType} | Vehicle ${vehicleId}`
            );

            return;
          }
        }

        // =====================================================
        // PING
        // =====================================================

        if (topic === TOPIC_PING) {

          const device =
            await prisma.iotDevice.findUnique({
              where: {
                serialNumber:
                  data.serialNumber
              }
            });

          if (device) {

            await prisma.iotDevice.update({
              where: {
                deviceId:
                  device.deviceId
              },
              data: {
                lastOnlineAt:
                  new Date(),
                status: 'online'
              }
            });

            const latestGeofence =
              await getLatestGeofence();

            if (
              latestGeofence &&
              latestGeofence.centerLat &&
              latestGeofence.centerLon
            ) {

              const configPayload =
                JSON.stringify({
                  lat: Number(
                    latestGeofence.centerLat
                  ),
                  lon: Number(
                    latestGeofence.centerLon
                  ),
                  rad: Number(
                    latestGeofence.radiusMeter ??
                    2600
                  )
                });

              client.publish(
                `gps/config/${device.serialNumber}`,
                configPayload
              );
              console.log(
                `📡 Send geofence -> ${device.serialNumber}`,
                configPayload
              );
            }
          }

          emitVehicleStatus(
            vehicleId,
            'online'
          );

          return;
        }

      } catch (error) {

        console.error(
          '❌ MQTT Processing Error:',
          error
        );
      }
    }
  );

  client.on(
    'error',
    (err) => {
      console.error(
        '❌ MQTT Error:',
        err
      );
    }
  );

  client.on(
    'disconnect',
    () => {
      console.warn(
        '⚠️ MQTT Disconnected'
      );
    }
  );
};

export let mqttClient: mqtt.MqttClient;

// Khi geofence thay đổi, reset trạng thái vi phạm của tất cả xe
// để hệ thống tính lại với vùng mới
export const resetAllVehicleZoneStates = () => {
  vehicleOutOfZoneState.clear();
  console.log('🔄 [GEOFENCE] Đã reset trạng thái in/out zone tất cả xe theo cấu hình vùng mới');
};