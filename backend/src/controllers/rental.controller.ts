import type { Request, Response } from 'express';
import { catchAsync } from '../utils/catch-async.js';
import { sendSuccess } from '../utils/response.util.js';
import * as rentalService from '../services/rental.service.js';

export const getAllRentals = catchAsync(async (req: Request, res: Response) => {
  const filters: { status?: string; vehicleId?: number; customerId?: number } = {};
  if (req.query.status) filters.status = String(req.query.status);
  if (req.query.vehicleId) filters.vehicleId = Number(req.query.vehicleId);
  if (req.query.customerId) filters.customerId = Number(req.query.customerId);

  const rentals = await rentalService.getAllRentals(filters);
  sendSuccess(res, rentals, 'Lấy danh sách hợp đồng thuê thành công');
});

export const getRentalById = catchAsync(async (req: Request, res: Response) => {
  const rental = await rentalService.getRentalById(Number(req.params.id));
  sendSuccess(res, rental, 'Lấy thông tin hợp đồng thành công');
});

export const createRental = catchAsync(async (req: Request, res: Response) => {
  // Lấy userId từ JWT
  const userId = req.user!.userId;
  const rental = await rentalService.createRental(req.body, userId);
  sendSuccess(res, rental, 'Tạo hợp đồng thuê xe thành công', 201);
});

export const updateRental = catchAsync(async (req: Request, res: Response) => {
  const rental = await rentalService.updateRental(Number(req.params.id), req.body);
  sendSuccess(res, rental, 'Cập nhật hợp đồng thành công');
});
