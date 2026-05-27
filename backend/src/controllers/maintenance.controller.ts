import type { Request, Response } from 'express';
import { catchAsync } from '../utils/catch-async.js';
import { sendSuccess } from '../utils/response.util.js';
import * as maintenanceService from '../services/maintenance.service.js';

export const getAllMaintenances = catchAsync(async (req: Request, res: Response) => {
  const filters: { status?: string; vehicleId?: number } = {};
  if (req.query.status) filters.status = String(req.query.status);
  if (req.query.vehicleId) filters.vehicleId = Number(req.query.vehicleId);

  const maintenances = await maintenanceService.getAllMaintenances(filters);
  sendSuccess(res, maintenances, 'Lấy danh sách bảo trì thành công');
});

export const getMaintenanceById = catchAsync(async (req: Request, res: Response) => {
  const maintenance = await maintenanceService.getMaintenanceById(Number(req.params.id));
  sendSuccess(res, maintenance, 'Lấy thông tin bảo trì thành công');
});

export const createMaintenance = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user!.userId;
  const maintenance = await maintenanceService.createMaintenance(req.body, userId);
  sendSuccess(res, maintenance, 'Tạo lịch bảo trì thành công', 201);
});

export const updateMaintenance = catchAsync(async (req: Request, res: Response) => {
  const maintenance = await maintenanceService.updateMaintenance(Number(req.params.id), req.body);
  sendSuccess(res, maintenance, 'Cập nhật bảo trì thành công');
});

export const deleteMaintenance = catchAsync(async (req: Request, res: Response) => {
  await maintenanceService.deleteMaintenance(Number(req.params.id));
  sendSuccess(res, null, 'Xóa lịch bảo trì thành công');
});
