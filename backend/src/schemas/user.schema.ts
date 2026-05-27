import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    email: z.string().email('Email không hợp lệ'),
    password: z.string().min(6, 'Mật khẩu tối thiểu 6 ký tự'),
    fullName: z.string().min(1, 'Họ tên là bắt buộc'),
    phone: z.string().min(9, 'Số điện thoại không hợp lệ').optional(),
    roleId: z.number().int().positive('Role ID không hợp lệ'),
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    fullName: z.string().optional(),
    phone: z.string().optional(),
    roleId: z.number().int().positive().optional(),
    status: z.enum(['active', 'inactive']).optional(),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID không hợp lệ'),
  }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>['body'];
export type UpdateUserInput = z.infer<typeof updateUserSchema>['body'];
