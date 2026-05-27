import { prisma } from '../configs/db.config.js';
import type { CreateVehicleInput, UpdateVehicleInput } from '../schemas/vehicle.schema.js';
import { AppError } from '../utils/app-error.js';

export const getAllVehicles = async (filters: { status?: string; search?: string }) => {
  const where: any = {};
  if (filters.status) where.status = filters.status;
  if (filters.search) {
    where.OR = [
      { plateNumber: { contains: filters.search } },
      { vehicleName: { contains: filters.search } },
    ];
  }

  return prisma.vehicle.findMany({
    where,
    include: {
      deviceAssignments: {
        where: { isActive: true },
        include: { device: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  });
};

export const getVehicleById = async (vehicleId: number) => {
  const vehicle = await prisma.vehicle.findUnique({
    where: { vehicleId },
    include: {
      deviceAssignments: {
        where: { isActive: true },
        include: { device: true },
      },
    },
  });

  if (!vehicle) {
    throw new AppError('Không tìm thấy xe', 404, 'VEHICLE_NOT_FOUND');
  }

  return vehicle;
};

export const createVehicle = async (data: CreateVehicleInput) => {
  const existing = await prisma.vehicle.findUnique({
    where: { plateNumber: data.plateNumber },
  });

  if (existing) {
    throw new AppError('Biển số xe đã tồn tại', 409, 'PLATE_NUMBER_EXISTS');
  }

  const cleanData = JSON.parse(JSON.stringify(data));

  return prisma.vehicle.create({ data: cleanData });
};

export const updateVehicle = async (vehicleId: number, data: UpdateVehicleInput) => {
  await getVehicleById(vehicleId); // Kiểm tra tồn tại
  const cleanData = JSON.parse(JSON.stringify(data));
  return prisma.vehicle.update({
    where: { vehicleId },
    data: cleanData,
  });
};

export const deleteVehicle = async (vehicleId: number) => {
  await getVehicleById(vehicleId);
  // Soft delete hoặc cascade delete tùy policy. Ở đây thực hiện delete cứng
  return prisma.vehicle.delete({
    where: { vehicleId },
  });
};

export const assignDevice = async (vehicleId: number, deviceId: number) => {
  await getVehicleById(vehicleId);

  const device = await prisma.iotDevice.findUnique({ where: { deviceId } });
  if (!device) {
    throw new AppError('Thiết bị IoT không tồn tại', 404, 'DEVICE_NOT_FOUND');
  }

  // Gỡ thiết bị cũ của xe
  await prisma.vehicleDeviceAssignment.updateMany({
    where: { vehicleId, isActive: true },
    data: { isActive: false, removedAt: new Date() },
  });

  // Gỡ thiết bị này khỏi xe khác nếu đang được gán
  await prisma.vehicleDeviceAssignment.updateMany({
    where: { deviceId, isActive: true },
    data: { isActive: false, removedAt: new Date() },
  });

  // Tạo assignment mới
  return prisma.vehicleDeviceAssignment.create({
    data: {
      vehicleId,
      deviceId,
    },
  });
};

export const unassignDevice = async (vehicleId: number) => {
  return prisma.vehicleDeviceAssignment.updateMany({
    where: { vehicleId, isActive: true },
    data: { isActive: false, removedAt: new Date() },
  });
};
