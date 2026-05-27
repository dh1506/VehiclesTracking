import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app-error.js';
import { verifyToken, type JwtPayload } from '../utils/jwt.util.js';
import { prisma } from '../configs/db.config.js';

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('Không có token xác thực', 401, 'UNAUTHORIZED');
    }

    const token = (authHeader as string).split(' ')[1] as string;
    const decoded = verifyToken(token);

    // Kiểm tra user còn tồn tại và đang active
    const user = await prisma.user.findUnique({
      where: { userId: decoded.userId },
      select: { status: true },
    });

    if (!user) {
      throw new AppError('Người dùng không tồn tại', 401, 'USER_NOT_FOUND');
    }
    if (user.status !== 'active') {
      throw new AppError('Tài khoản đã bị khóa', 403, 'USER_INACTIVE');
    }

    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

export const authorize = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new AppError('Chưa xác thực', 401, 'UNAUTHORIZED'));
    }

    if (!roles.includes(req.user.roleName)) {
      return next(new AppError('Không có quyền truy cập', 403, 'FORBIDDEN'));
    }

    next();
  };
};
