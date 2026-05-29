import { prisma } from '../configs/db.config.js';
import { AppError } from '../utils/app-error.js';
import type { CreateMaintenanceInput, UpdateMaintenanceInput } from '../schemas/maintenance.schema.js';

export const getAllMaintenances = async (filters: { status?: string; vehicleId?: number }) => {
  const where: any = {};
  if (filters.status) where.status = filters.status;
  if (filters.vehicleId) where.vehicleId = filters.vehicleId;

  return prisma.maintenanceLog.findMany({
    where,
    include: {
      vehicle: { select: { plateNumber: true, vehicleName: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
};

export const getMaintenanceById = async (maintenanceId: number) => {
  const maintenance = await prisma.maintenanceLog.findUnique({
    where: { maintenanceId },
    include: {
      vehicle: { select: { plateNumber: true, vehicleName: true } },
    },
  });

  if (!maintenance) {
    throw new AppError('Không tìm thấy bản ghi bảo trì', 404, 'MAINTENANCE_NOT_FOUND');
  }

  return maintenance;
};

export const createMaintenance = async (data: CreateMaintenanceInput, reportedBy: number) => {
  const vehicle = await prisma.vehicle.findUnique({ where: { vehicleId: data.vehicleId } });
  if (!vehicle) throw new AppError('Không tìm thấy xe', 404, 'VEHICLE_NOT_FOUND');

  const createData: any = {
    vehicleId: data.vehicleId,
    maintenanceType: data.maintenanceType,
    createdBy: reportedBy,
    maintenanceDate: data.scheduledDate
    ? new Date(data.scheduledDate)
    : new Date(),
  };
  if (data.cost !== undefined) createData.cost = data.cost;
  if (data.notes !== undefined) createData.description = data.notes;
  // if (data.scheduledDate !== undefined) createData.maintenanceDate = new Date(data.scheduledDate);

  return prisma.maintenanceLog.create({ data: createData });
};

export const updateMaintenance = async (maintenanceId: number, data: UpdateMaintenanceInput) => {
  await getMaintenanceById(maintenanceId);
  const updateData: any = {};
  if (data.maintenanceType !== undefined) updateData.maintenanceType = data.maintenanceType;
  if (data.actualDate !== undefined) updateData.maintenanceDate = new Date(data.actualDate);
  if (data.cost !== undefined) updateData.cost = data.cost;
  if (data.notes !== undefined) updateData.description = data.notes;

  return prisma.maintenanceLog.update({ where: { maintenanceId }, data: updateData });
};

export const deleteMaintenance = async (maintenanceId: number) => {
  await getMaintenanceById(maintenanceId);
  return prisma.maintenanceLog.delete({ where: { maintenanceId } });
};
