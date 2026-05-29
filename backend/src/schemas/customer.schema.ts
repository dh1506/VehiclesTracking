import { z } from 'zod';

export const createCustomerSchema = z.object({
  body: z.object({
    fullName: z.string().min(1, 'Họ tên là bắt buộc'),
    phone: z.string().min(9, 'Số điện thoại không hợp lệ'),
    email: z.string().email('Email không hợp lệ').optional().or(z.literal('')),
    identityNumber: z.string().optional().or(z.literal('')),
    address: z.string().optional().or(z.literal('')),
  })
});

export const updateCustomerSchema = z.object({
  body: z.object({
    fullName: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().email('Email không hợp lệ').optional().or(z.literal('')),
    identityNumber: z.string().optional().or(z.literal('')),
    address: z.string().optional().or(z.literal('')),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID không hợp lệ'),
  })
});

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>['body'];
export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>['body'];