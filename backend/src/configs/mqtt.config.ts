
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

  const client = mqtt.connect(env.MQTT_BROKER_URL);

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

          await prisma.gpsLog.create({
            data: {
              vehicleId,
              latitude: data.lat,
              longitude: data.lon,
              speedKmh: data.speed || 0,
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

