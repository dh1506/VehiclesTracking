// Tiện ích JWT — sign và verify token

import jwt, { type SignOptions } from 'jsonwebtoken';
import { env } from '../configs/env.config.js';
import { AppError } from './app-error.js';

export interface JwtPayload {
  userId: number;
  email: string;
  roleId: number;
  roleName: string;
}

/**
 * Tạo JWT token từ payload người dùng
 */
export const signToken = (payload: JwtPayload): string => {
  const options: SignOptions = {
    expiresIn: (env.JWT_EXPIRES_IN || '1d') as any,
  };
  return jwt.sign(payload, env.JWT_SECRET as string, options);
};

/**
 * Verify và decode JWT token — throw AppError nếu không hợp lệ
 */
export const verifyToken = (token: string): JwtPayload => {
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET as jwt.Secret) as JwtPayload;
    return decoded;
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      throw new AppError('Token đã hết hạn, vui lòng đăng nhập lại', 401, 'TOKEN_EXPIRED');
    }
    throw new AppError('Token không hợp lệ', 401, 'INVALID_TOKEN');
  }
};
