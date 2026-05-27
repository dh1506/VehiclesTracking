import { prisma } from '../configs/db.config.js';
import type { CreateIotDeviceInput, UpdateIotDeviceInput } from '../schemas/iot-device.schema.js';
import { AppError } from '../utils/app-error.js';

export const getAllIotDevices = async (filters: { status?: string; search?: string }) => {
  const where: any = {};
  if (filters.status) where.status = filters.status;
  if (filters.search) {
    where.serialNumber = { contains: filters.search };
  }

  return prisma.iotDevice.findMany({
    where,
    include: {
      assignments: {
        where: { isActive: true },
        include: { vehicle: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  });
};

export const getIotDeviceById = async (deviceId: number) => {
  const device = await prisma.iotDevice.findUnique({
    where: { deviceId },
    include: {
      assignments: {
        where: { isActive: true },
        include: { vehicle: true },
      },
    },
  });

  if (!device) {
    throw new AppError('Không tìm thấy thiết bị', 404, 'DEVICE_NOT_FOUND');
  }

  return device;
};

export const createIotDevice = async (data: CreateIotDeviceInput) => {
  const existing = await prisma.iotDevice.findUnique({
    where: { serialNumber: data.serialNumber },
  });

  if (existing) {
    throw new AppError('Mã thiết bị đã tồn tại', 409, 'DEVICE_EXISTS');
  }

  const createData: any = {
    serialNumber: data.serialNumber,
    mqttTopic: data.mqttTopic,
  };
  if (data.simNumber !== undefined) createData.simNumber = data.simNumber;
  if (data.firmwareVersion !== undefined) createData.firmwareVersion = data.firmwareVersion;

  return prisma.iotDevice.create({ data: createData });
};

export const updateIotDevice = async (deviceId: number, data: UpdateIotDeviceInput) => {
  await getIotDeviceById(deviceId);
  const updateData: any = {};
  if (data.serialNumber !== undefined) updateData.serialNumber = data.serialNumber;
  if (data.mqttTopic !== undefined) updateData.mqttTopic = data.mqttTopic;
  if (data.simNumber !== undefined) updateData.simNumber = data.simNumber;
  if (data.firmwareVersion !== undefined) updateData.firmwareVersion = data.firmwareVersion;
  if (data.status !== undefined) updateData.status = data.status;

  return prisma.iotDevice.update({ where: { deviceId }, data: updateData });
};

export const deleteIotDevice = async (deviceId: number) => {
  await getIotDeviceById(deviceId);
  return prisma.iotDevice.delete({
    where: { deviceId },
  });
};
