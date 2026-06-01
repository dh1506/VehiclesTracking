import { prisma } from '../configs/db.config.js';
import { AppError } from '../utils/app-error.js';
import type { CreateGeofenceInput, UpdateGeofenceInput } from '../schemas/geofence.schema.js';
import { mqttClient } from '../configs/mqtt.config.js';

export const getAllGeofences = async (filters: { search?: string }) => {
  const where: any = {};
  if (filters.search) {
    where.geofenceName = { contains: filters.search };
  }

  return prisma.geofence.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });
};

export const getGeofenceById = async (geofenceId: number) => {
  const geofence = await prisma.geofence.findUnique({
    where: { geofenceId },
  });

  if (!geofence) {
    throw new AppError('Không tìm thấy vùng giám sát', 404, 'GEOFENCE_NOT_FOUND');
  }

  return geofence;
};

export const createGeofence = async (data: CreateGeofenceInput, createdBy: number) => {
  const createData: any = {
    geofenceName: data.zoneName,
    geofenceType: data.type || 'circle',
    centerLat: data.latitude,
    centerLon: data.longitude,
    radiusMeter: data.radiusMeters,
    createdBy,
  };
  if (data.description !== undefined) createData.polygonData = data.description;

  return prisma.geofence.create({
    data: createData,
  });
};

export const updateGeofence = async (geofenceId: number, data: UpdateGeofenceInput) => {
  await getGeofenceById(geofenceId); // Kiểm tra tồn tại

  const mapped: any = {};
  if (data.zoneName) mapped.geofenceName = data.zoneName;
  if (data.description !== undefined) mapped.polygonData = data.description;
  if (data.latitude !== undefined) mapped.centerLat = data.latitude;
  if (data.longitude !== undefined) mapped.centerLon = data.longitude;
  if (data.radiusMeters !== undefined) mapped.radiusMeter = data.radiusMeters;
  if (data.isActive !== undefined) mapped.isActive = data.isActive; // if you added this field later

  const updated = await prisma.geofence.update({
    where: { geofenceId },
    data: mapped,
  });

  const devices =
  await prisma.iotDevice.findMany({
    where: {
      status: 'online'
    }
  });

  for (const device of devices) {

    mqttClient.publish(
      `gps/config/${device.serialNumber}`,
      JSON.stringify({
        lat: Number(updated.centerLat),
        lon: Number(updated.centerLon),
        rad: Number(updated.radiusMeter ?? 2600)
      })
    );
  }
};

export const deleteGeofence = async (geofenceId: number) => {
  await getGeofenceById(geofenceId);
  return prisma.geofence.delete({
    where: { geofenceId },
  });
};
