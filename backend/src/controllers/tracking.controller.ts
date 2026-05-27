import type { Request, Response } from 'express';
import { catchAsync } from '../utils/catch-async.js';
import { sendSuccess } from '../utils/response.util.js';
import * as trackingService from '../services/tracking.service.js';

export const getTrackingHistory = catchAsync(async (req: Request, res: Response) => {
  const { vehicleId, startTime, endTime } = req.query;
  const filters: { vehicleId?: number; startTime?: Date; endTime?: Date } = {};
  if (vehicleId) filters.vehicleId = Number(vehicleId);
  if (startTime) filters.startTime = new Date(startTime as string);
  if (endTime) filters.endTime = new Date(endTime as string);

  const history = await trackingService.getVehicleTrackingHistory(filters);
  sendSuccess(res, history, 'Lấy lịch sử di chuyển thành công');
});

export const getAlerts = catchAsync(async (req: Request, res: Response) => {
  const { vehicleId, alertType, isResolved, startTime, endTime } = req.query;
  
  let resolved: boolean | undefined;
  if (isResolved === 'true') resolved = true;
  if (isResolved === 'false') resolved = false;

  const filters: { vehicleId?: number; alertType?: string; isResolved?: boolean; startTime?: Date; endTime?: Date } = {};
  if (vehicleId) filters.vehicleId = Number(vehicleId);
  if (alertType) filters.alertType = String(alertType);
  if (typeof isResolved === 'string') filters.isResolved = isResolved === 'true';
  if (startTime) filters.startTime = new Date(startTime as string);
  if (endTime) filters.endTime = new Date(endTime as string);

  const alerts = await trackingService.getVehicleAlerts(filters);
  sendSuccess(res, alerts, 'Lấy danh sách cảnh báo thành công');
});

export const resolveAlert = catchAsync(async (req: Request, res: Response) => {
  const alert = await trackingService.resolveAlert(Number(req.params.id), req.body.notes);
  sendSuccess(res, alert, 'Đã xử lý cảnh báo thành công');
});
