import { prisma } from '../configs/db.config.js';
import { AppError } from '../utils/app-error.js';
import type { CreateGeofenceInput, UpdateGeofenceInput } from '../schemas/geofence.schema.js';

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

  return prisma.geofence.update({
    where: { geofenceId },
    data: mapped,
  });
};

export const deleteGeofence = async (geofenceId: number) => {
  await getGeofenceById(geofenceId);
  return prisma.geofence.delete({
    where: { geofenceId },
  });
};
