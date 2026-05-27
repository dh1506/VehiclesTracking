import { z } from 'zod'

export const userSchema = z.object({
  fullName: z.string().min(1, { message: 'Họ tên bắt buộc' }),
  email: z.string().email({ message: 'Email không hợp lệ' }),
  password: z.string().min(6, { message: 'Mật khẩu tối thiểu 6 ký tự' }).optional(),
  phone: z.string().optional(),
  roleId: z.number({ message: 'Vai trò bắt buộc' }).min(1, { message: 'Chọn vai trò' }),
})

export type UserFormValues = z.infer<typeof userSchema>

export default userSchema
