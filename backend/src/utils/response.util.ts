// Helper chuẩn hóa response format cho toàn bộ API

// Helper chuẩn hóa response format cho toàn bộ API
import type { Response } from 'express';

interface SuccessResponse<T> {
  success: true;
  data: T;
  message: string;
  meta?: Record<string, unknown>;
}

export interface ErrorResponse {
  success: false;
  message: string;
  error: {
    code: string;
    details?: unknown[];
  };
}

/**
 * Trả về response thành công chuẩn
 */
export const sendSuccess = <T>(
  res: Response,
  data: T,
  message = 'Thao tác thành công',
  statusCode = 200,
  meta?: Record<string, unknown>,
): Response => {
  const body: SuccessResponse<T> = { success: true, data, message };
  if (meta) body.meta = meta;
  return res.status(statusCode).json(body);
};

/**
 * Trả về response lỗi chuẩn
 */
export const sendError = (
  res: Response,
  message: string,
  statusCode = 500,
  code = 'INTERNAL_SERVER_ERROR',
  details?: unknown[],
): Response => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: { code, ...(details ? { details } : {}) },
  });
};
