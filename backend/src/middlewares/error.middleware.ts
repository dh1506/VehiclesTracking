import type { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../utils/app-error.js';
import { sendError } from '../utils/response.util.js';

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  console.error('Error:', err);

  // Zod Validation Error
  if (err instanceof ZodError) {
    return sendError(
      res,
      'Validation failed',
      400,
      'VALIDATION_ERROR',
      err.issues.map((e: { path: any[]; message: any; }) => ({
        field: e.path.join('.'),
        message: e.message,
      }))
    );
  }

  // AppError (Custom Error)
  if (err instanceof AppError) {
    return sendError(res, err.message, err.statusCode, err.code);
  }

  // Prisma Errors (Cơ bản)
  if (err.code && err.code.startsWith('P2')) {
    if (err.code === 'P2002') {
      return sendError(res, 'Dữ liệu đã tồn tại', 409, 'DUPLICATE_ENTRY', [
        err.meta?.target,
      ]);
    }
    if (err.code === 'P2025') {
      return sendError(res, 'Không tìm thấy bản ghi', 404, 'RECORD_NOT_FOUND');
    }
    return sendError(res, 'Lỗi cơ sở dữ liệu', 500, 'DATABASE_ERROR');
  }

  // Lỗi không xác định
  return sendError(res, 'Lỗi hệ thống', 500, 'INTERNAL_SERVER_ERROR');
};
