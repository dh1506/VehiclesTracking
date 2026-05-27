import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import userSchema from '../../../schemas/user.schema'
import type { UserFormValues } from '../../../schemas/user.schema'
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'

type Props = {
  initialValues?: Partial<UserFormValues>
  onSubmit: (values: UserFormValues) => Promise<void> | void
  submitLabel?: string
}

export function UserForm({ initialValues, onSubmit, submitLabel = 'Lưu' }: Props) {
  const { register, handleSubmit, formState } = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: initialValues as any,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Họ tên</label>
        <Input {...register('fullName')} />
        {formState.errors.fullName && <p className="text-sm text-red-600">{formState.errors.fullName.message}</p>}
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <Input type="email" {...register('email')} />
        {formState.errors.email && <p className="text-sm text-red-600">{formState.errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm mb-1">Mật khẩu</label>
        <Input type="password" {...register('password')} placeholder="Để trống nếu không đổi" />
        {formState.errors.password && <p className="text-sm text-red-600">{formState.errors.password.message}</p>}
      </div>

      <div>
        <label className="block text-sm mb-1">Số điện thoại</label>
        <Input {...register('phone')} />
      </div>

      <div>
        <label className="block text-sm mb-1">Vai trò</label>
        <select {...register('roleId', { valueAsNumber: true })} className="w-full rounded-md border px-3 py-2 bg-white text-sm">
          <option value={0}>Chọn vai trò</option>
          <option value={1}>Admin</option>
          <option value={2}>Staff</option>
          <option value={3}>Technician</option>
          <option value={4}>User</option>
        </select>
        {formState.errors.roleId && <p className="text-sm text-red-600">{formState.errors.roleId.message}</p>}
      </div>

      <div>
        <Button type="submit" disabled={formState.isSubmitting}>{submitLabel}</Button>
      </div>
    </form>
  )
}

export default UserForm
