import type { Request, Response } from 'express';
import { catchAsync } from '../utils/catch-async.js';
import { sendSuccess } from '../utils/response.util.js';
import * as vehicleService from '../services/vehicle.service.js';

export const getAllVehicles = catchAsync(async (req: Request, res: Response) => {
  const { status, search } = req.query;
  const vehicles = await vehicleService.getAllVehicles({
    status: status as string,
    search: search as string,
  });
  sendSuccess(res, vehicles, 'Lấy danh sách xe thành công');
});

export const getVehicleById = catchAsync(async (req: Request, res: Response) => {
  const vehicle = await vehicleService.getVehicleById(Number(req.params.id));
  sendSuccess(res, vehicle, 'Lấy thông tin xe thành công');
});

export const createVehicle = catchAsync(async (req: Request, res: Response) => {
  const vehicle = await vehicleService.createVehicle(req.body);
  sendSuccess(res, vehicle, 'Thêm xe thành công', 201);
});

export const updateVehicle = catchAsync(async (req: Request, res: Response) => {
  const vehicle = await vehicleService.updateVehicle(Number(req.params.id), req.body);
  sendSuccess(res, vehicle, 'Cập nhật thông tin xe thành công');
});

export const deleteVehicle = catchAsync(async (req: Request, res: Response) => {
  await vehicleService.deleteVehicle(Number(req.params.id));
  sendSuccess(res, null, 'Xóa xe thành công');
});

export const assignDevice = catchAsync(async (req: Request, res: Response) => {
  const assignment = await vehicleService.assignDevice(
    Number(req.params.id),
    req.body.deviceId
  );
  sendSuccess(res, assignment, 'Gán thiết bị thành công');
});

export const unassignDevice = catchAsync(async (req: Request, res: Response) => {
  await vehicleService.unassignDevice(Number(req.params.id));
  sendSuccess(res, null, 'Tháo thiết bị thành công');
});
