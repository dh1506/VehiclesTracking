import { prisma } from '../configs/db.config.js';
import { AppError } from '../utils/app-error.js';
import bcrypt from 'bcrypt';
import type { CreateUserInput, UpdateUserInput } from '../schemas/user.schema.js';

export const getAllUsers = async (filters: { roleId?: number; status?: string; search?: string }) => {
  const where: any = {};
  if (filters.roleId) where.roleId = filters.roleId;
  if (filters.status) where.status = filters.status;
  if (filters.search) {
    where.OR = [
      { fullName: { contains: filters.search } },
      { email: { contains: filters.search } },
    ];
  }

  const users = await prisma.user.findMany({
    where,
    include: { role: true },
    orderBy: { createdAt: 'desc' },
  });

  return users.map(({ passwordHash, ...user }) => user);
};

export const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: { userId },
    include: { role: true },
  });

  if (!user) {
    throw new AppError('Không tìm thấy người dùng', 404, 'USER_NOT_FOUND');
  }

  const { passwordHash, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const createUser = async (data: CreateUserInput) => {
  const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
  if (existingUser) {
    throw new AppError('Email đã được sử dụng', 409, 'EMAIL_EXISTS');
  }

  const role = await prisma.role.findUnique({ where: { roleId: data.roleId } });
  if (!role) {
    throw new AppError('Quyền không tồn tại', 404, 'ROLE_NOT_FOUND');
  }

  const passwordHash = await bcrypt.hash(data.password, 10);
  const createData: any = {
    email: data.email,
    passwordHash,
    fullName: data.fullName,
    roleId: data.roleId,
    status: 'active',
  };
  createData.phone = data.phone ?? null;

  const newUser = await prisma.user.create({ data: createData });

  const { passwordHash: _, ...user } = newUser;
  return user;
};

export const updateUser = async (userId: number, data: UpdateUserInput) => {
  await getUserById(userId); // check existence

  if (data.roleId) {
    const role = await prisma.role.findUnique({ where: { roleId: data.roleId } });
    if (!role) throw new AppError('Quyền không tồn tại', 404, 'ROLE_NOT_FOUND');
  }

  const updateData: any = {};
  if (data.fullName !== undefined) updateData.fullName = data.fullName;
  if (data.phone !== undefined) updateData.phone = data.phone;
  if (data.roleId !== undefined) updateData.roleId = data.roleId;
  if (data.status !== undefined) updateData.status = data.status;

  const updatedUser = await prisma.user.update({ where: { userId }, data: updateData });

  const { passwordHash: _, ...user } = updatedUser;
  return user;
};

export const deleteUser = async (userId: number) => {
  await getUserById(userId); // check existence
  return prisma.user.delete({ where: { userId } });
};
