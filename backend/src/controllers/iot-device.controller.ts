import type { Request, Response } from 'express';
import { catchAsync } from '../utils/catch-async.js';
import { sendSuccess } from '../utils/response.util.js';
import * as iotDeviceService from '../services/iot-device.service.js';

export const getAllIotDevices = catchAsync(async (req: Request, res: Response) => {
  const devices = await iotDeviceService.getAllIotDevices({
    status: req.query.status as string,
    search: req.query.search as string,
  });
  sendSuccess(res, devices, 'Lấy danh sách thiết bị IoT thành công');
});

export const getIotDeviceById = catchAsync(async (req: Request, res: Response) => {
  const device = await iotDeviceService.getIotDeviceById(Number(req.params.id));
  sendSuccess(res, device, 'Lấy thông tin thiết bị thành công');
});

export const createIotDevice = catchAsync(async (req: Request, res: Response) => {
  const device = await iotDeviceService.createIotDevice(req.body);
  sendSuccess(res, device, 'Thêm thiết bị IoT thành công', 201);
});

export const updateIotDevice = catchAsync(async (req: Request, res: Response) => {
  const device = await iotDeviceService.updateIotDevice(Number(req.params.id), req.body);
  sendSuccess(res, device, 'Cập nhật thiết bị thành công');
});

export const deleteIotDevice = catchAsync(async (req: Request, res: Response) => {
  await iotDeviceService.deleteIotDevice(Number(req.params.id));
  sendSuccess(res, null, 'Xóa thiết bị thành công');
});
