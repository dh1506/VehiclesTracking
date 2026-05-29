import { z } from 'zod';

export const customerSchema = z.object({
  fullName: z.string().min(1, { message: 'Họ tên khách hàng bắt buộc' }),
  phone: z.string().min(9, { message: 'Số điện thoại bắt buộc (tối thiểu 9 số)' }),
  email: z.string().email({ message: 'Email không hợp lệ' }).optional().or(z.literal('')),
  identityNumber: z.string().optional(),
  address: z.string().optional(),
});

export type CustomerFormValues = z.infer<typeof customerSchema>;
export default customerSchema;