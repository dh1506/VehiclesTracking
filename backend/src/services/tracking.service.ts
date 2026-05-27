import { prisma } from '../configs/db.config.js';
import { AppError } from '../utils/app-error.js';

export const getVehicleTrackingHistory = async (filters: { vehicleId?: number; startTime?: Date; endTime?: Date }) => {
  const where: any = {};
  if (filters.vehicleId) where.vehicleId = filters.vehicleId;
  if (filters.startTime) where.recordedAt = { ...where.recordedAt, gte: filters.startTime };
  if (filters.endTime) where.recordedAt = { ...where.recordedAt, lte: filters.endTime };

  return prisma.gpsLog.findMany({
    where,
    orderBy: { recordedAt: 'asc' },
  });
};

export const getVehicleAlerts = async (filters: { 
  vehicleId?: number; 
  alertType?: string; 
  isResolved?: boolean; 
  startTime?: Date; 
  endTime?: Date 
}) => {
  const where: any = {};
  if (filters.vehicleId) where.vehicleId = filters.vehicleId;
  if (filters.alertType) where.alertType = filters.alertType;
  if (filters.isResolved !== undefined) where.isAcknowledged = filters.isResolved;
  if (filters.startTime) where.createdAt = { ...where.createdAt, gte: filters.startTime };
  if (filters.endTime) where.createdAt = { ...where.createdAt, lte: filters.endTime };

  return prisma.vehicleAlert.findMany({
    where,
    include: {
      vehicle: { select: { plateNumber: true, vehicleName: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
};

export const resolveAlert = async (alertId: number, notes?: string) => {
  const alert = await prisma.vehicleAlert.findUnique({ where: { alertId } });
  if (!alert) {
    throw new AppError('Không tìm thấy cảnh báo', 404, 'ALERT_NOT_FOUND');
  }

  return prisma.vehicleAlert.update({
    where: { alertId },
    data: {
      isAcknowledged: true,
      acknowledgedAt: new Date(),
      // TODO: Thêm resolvedBy nếu có auth context. Ở đây tạm thời bỏ qua hoặc truyền userId vào service
    },
  });
};
