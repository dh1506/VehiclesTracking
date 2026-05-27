import bcrypt from 'bcrypt';
import { prisma } from '../configs/db.config.js';
import { AppError } from '../utils/app-error.js';
import { signToken } from '../utils/jwt.util.js';
import type { LoginInput } from '../schemas/auth.schema.js';

export const login = async (input: LoginInput) => {
  const user = await prisma.user.findUnique({
    where: { email: input.email },
    include: { role: true },
  });

  if (!user) {
    throw new AppError('Email hoặc mật khẩu không chính xác', 401, 'INVALID_CREDENTIALS');
  }

  if (user.status !== 'active') {
    throw new AppError('Tài khoản đã bị khóa', 403, 'USER_INACTIVE');
  }

  const isPasswordValid = await bcrypt.compare(input.password, user.passwordHash);
  if (!isPasswordValid) {
    throw new AppError('Email hoặc mật khẩu không chính xác', 401, 'INVALID_CREDENTIALS');
  }

  const token = signToken({
    userId: user.userId,
    email: user.email,
    roleId: user.roleId,
    roleName: user.role.roleName,
  });

  // Không trả về passwordHash
  const { passwordHash, ...userWithoutPassword } = user;

  return {
    user: userWithoutPassword,
    token,
  };
};

export const getMe = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: { userId },
    include: { role: true },
  });

  if (!user) {
    throw new AppError('Người dùng không tồn tại', 404, 'USER_NOT_FOUND');
  }

  const { passwordHash, ...userWithoutPassword } = user;
  return userWithoutPassword;
};
