// backend/src/controllers/customer.controller.ts
import type { Request, Response } from 'express';
import { catchAsync } from '../utils/catch-async.js';
import { sendSuccess } from '../utils/response.util.js';
import * as customerService from '../services/customer.service.js';

export const getAllCustomers = catchAsync(async (req: Request, res: Response) => {
  const customers = await customerService.getAllCustomers({
    search: req.query.search as string,
  });
  sendSuccess(res, customers, 'Lấy danh sách khách hàng thành công');
});

export const getCustomerById = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const customer = await customerService.getCustomerById(id);
  sendSuccess(res, customer, 'Lấy chi tiết khách hàng thành công');
});

export const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const customer = await customerService.createCustomer(req.body);
  sendSuccess(res, customer, 'Tạo khách hàng thành công', 201);
});

export const updateCustomer = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const customer = await customerService.updateCustomer(id, req.body);
  sendSuccess(res, customer, 'Cập nhật khách hàng thành công');
});

export const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await customerService.deleteCustomer(id);
  sendSuccess(res, null, 'Xóa khách hàng thành công');
});