import type { Request, Response } from 'express';
import { catchAsync } from '../utils/catch-async.js';
import { sendSuccess } from '../utils/response.util.js';
import * as geofenceService from '../services/geofence.service.js';

export const getAllGeofences = catchAsync(async (req: Request, res: Response) => {
  const geofences = await geofenceService.getAllGeofences({
    search: req.query.search as string,
  });
  sendSuccess(res, geofences, 'Lấy danh sách vùng giám sát thành công');
});

export const getGeofenceById = catchAsync(async (req: Request, res: Response) => {
  const geofence = await geofenceService.getGeofenceById(Number(req.params.id));
  sendSuccess(res, geofence, 'Lấy thông tin vùng giám sát thành công');
});

export const createGeofence = catchAsync(async (req: Request, res: Response) => {
  const createdBy = (req as any).user?.userId ?? 0;
  const geofence = await geofenceService.createGeofence(req.body, createdBy);
  sendSuccess(res, geofence, 'Tạo vùng giám sát thành công', 201);
});

export const updateGeofence = catchAsync(async (req: Request, res: Response) => {
  const geofence = await geofenceService.updateGeofence(Number(req.params.id), req.body);
  sendSuccess(res, geofence, 'Cập nhật vùng giám sát thành công');
});

export const deleteGeofence = catchAsync(async (req: Request, res: Response) => {
  await geofenceService.deleteGeofence(Number(req.params.id));
  sendSuccess(res, null, 'Xóa vùng giám sát thành công');
});
