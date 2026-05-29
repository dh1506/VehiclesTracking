// src/features/users/components/UserForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import userSchema from '../../../schemas/user.schema';
import type { UserFormValues } from '../../../schemas/user.schema';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { User, Mail, Lock, Phone, ShieldCheck } from 'lucide-react';

type Props = {
  initialValues?: Partial<UserFormValues>;
  onSubmit: (values: UserFormValues) => Promise<void> | void;
  submitLabel?: string;
};

export function UserForm({ initialValues, onSubmit, submitLabel = 'Lưu thông tin' }: Props) {
  const { register, handleSubmit, formState } = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: initialValues as any,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl bg-white">
      {/* Họ tên */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Họ và tên người dùng</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><User className="h-4 w-4" /></span>
          <Input {...register('fullName')} className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500" placeholder="VD: Nguyễn Văn A" />
        </div>
        {formState.errors.fullName && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.fullName.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Hộp thư (Email)</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><Mail className="h-4 w-4" /></span>
            <Input type="email" {...register('email')} className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500" placeholder="example@vtracking.com" />
          </div>
          {formState.errors.email && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.email.message}</p>}
        </div>

        {/* Số điện thoại */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Số điện thoại liên hệ</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><Phone className="h-4 w-4" /></span>
            <Input {...register('phone')} className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500" placeholder="VD: 0987654321" />
          </div>
        </div>
      </div>

      {/* Mật khẩu bảo mật */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Mật khẩu bảo mật</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><Lock className="h-4 w-4" /></span>
          <Input type="password" {...register('password')} className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500" placeholder="Để trống nếu giữ nguyên mật khẩu cũ" />
        </div>
        {formState.errors.password && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.password.message}</p>}
      </div>

      {/* Phân quyền */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Vai trò quản trị & vận hành</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><ShieldCheck className="h-4 w-4" /></span>
          <select {...register('roleId', { valueAsNumber: true })} className="pl-10 w-full rounded-xl border border-slate-200 h-11 px-3 bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none text-slate-700">
            <option value={0}>-- Chọn vai trò hành chính --</option>
            <option value={1}>Quản trị viên hệ thống (Admin)</option>
            <option value={2}>Điều phối viên vận hành (Staff)</option>
            <option value={3}>Kỹ thuật viên phần cứng (Technician)</option>
            <option value={4}>Khách hàng thuê xe (User)</option>
          </select>
        </div>
        {formState.errors.roleId && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.roleId.message}</p>}
      </div>

      <div className="flex justify-end pt-3 border-t border-slate-50">
        <Button type="submit" className="h-11 px-6 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-sm shadow-lg shadow-indigo-600/10" disabled={formState.isSubmitting}>
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

export default UserForm;