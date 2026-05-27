import type { Request, Response } from 'express';
import { catchAsync } from '../utils/catch-async.js';
import { sendSuccess } from '../utils/response.util.js';
import * as authService from '../services/auth.service.js';

export const loginController = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.login(req.body);
  sendSuccess(res, result, 'Đăng nhập thành công');
});

export const getMeController = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user!.userId;
  const user = await authService.getMe(userId);
  sendSuccess(res, user, 'Lấy thông tin người dùng thành công');
});
