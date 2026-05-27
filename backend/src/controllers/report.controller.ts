import type { Request, Response } from 'express';
import { catchAsync } from '../utils/catch-async.js';
import { sendSuccess } from '../utils/response.util.js';
import * as reportService from '../services/report.service.js';

export const getDashboardStats = catchAsync(async (req: Request, res: Response) => {
  const stats = await reportService.getDashboardStats();
  sendSuccess(res, stats, 'Lấy thống kê thành công');
});

export const getRentalRevenue = catchAsync(async (req: Request, res: Response) => {
  const { startDate, endDate } = req.query;
  const start = startDate ? new Date(startDate as string) : new Date(0);
  const end = endDate ? new Date(endDate as string) : new Date();
  
  const revenue = await reportService.getRentalRevenue(start, end);
  sendSuccess(res, revenue, 'Lấy doanh thu thành công');
});
