// Bọc async controller — tránh try/catch lặp lại ở mỗi controller

// Bọc async controller — tránh try/catch lặp lại ở mỗi controller
import type { Request, Response, NextFunction } from 'express';

type AsyncController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

/**
 * Bọc async function, forward lỗi đến global error handler thay vì crash
 */
export const catchAsync =
  (fn: AsyncController) =>
  (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch(next);
  };
