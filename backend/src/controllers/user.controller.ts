import type { Request, Response } from 'express';
import { catchAsync } from '../utils/catch-async.js';
import { sendSuccess } from '../utils/response.util.js';
import * as userService from '../services/user.service.js';

export const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const filters: { roleId?: number; status?: string; search?: string } = {};
  if (req.query.roleId) filters.roleId = Number(req.query.roleId);
  if (req.query.status) filters.status = String(req.query.status);
  if (req.query.search) filters.search = String(req.query.search);

  const users = await userService.getAllUsers(filters);
  sendSuccess(res, users, 'Lấy danh sách người dùng thành công');
});

export const getUserById = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.getUserById(Number(req.params.id));
  sendSuccess(res, user, 'Lấy thông tin người dùng thành công');
});

export const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);
  sendSuccess(res, user, 'Tạo người dùng mới thành công', 201);
});

export const updateUser = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.updateUser(Number(req.params.id), req.body);
  sendSuccess(res, user, 'Cập nhật người dùng thành công');
});

export const deleteUser = catchAsync(async (req: Request, res: Response) => {
  await userService.deleteUser(Number(req.params.id));
  sendSuccess(res, null, 'Xóa người dùng thành công');
});
