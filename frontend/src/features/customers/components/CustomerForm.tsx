import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import customerSchema from '../../../schemas/customer.schema';
import type { CustomerFormValues } from '../../../schemas/customer.schema';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { User, Phone, Mail, CreditCard, MapPin } from 'lucide-react';

type Props = {
  initialValues?: Partial<CustomerFormValues>;
  onSubmit: (values: CustomerFormValues) => Promise<void> | void;
  submitLabel?: string;
};

export default function CustomerForm({ initialValues, onSubmit, submitLabel = 'Đăng ký khách hàng' }: Props) {
  const { register, handleSubmit, formState } = useForm<CustomerFormValues>({
    resolver: zodResolver(customerSchema),
    defaultValues: initialValues as any,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl bg-white text-left">
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Họ và tên khách hàng</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><User className="h-4 w-4" /></span>
          <Input {...register('fullName')} className="pl-10 h-11 rounded-xl" placeholder="VD: Trần Văn B" />
        </div>
        {formState.errors.fullName && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.fullName.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Số điện thoại liên lạc</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><Phone className="h-4 w-4" /></span>
            <Input {...register('phone')} className="pl-10 h-11 rounded-xl" placeholder="VD: 0912345678" />
          </div>
          {formState.errors.phone && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.phone.message}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Mã số CCCD / Hộ chiếu</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><CreditCard className="h-4 w-4" /></span>
            <Input {...register('identityNumber')} className="pl-10 h-11 rounded-xl" placeholder="Số chứng thư cá nhân" />
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Thư điện tử (Email)</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><Mail className="h-4 w-4" /></span>
          <Input type="email" {...register('email')} className="pl-10 h-11 rounded-xl" placeholder="customer@gmail.com" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Địa chỉ thường trú</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><MapPin className="h-4 w-4" /></span>
          <Input {...register('address')} className="pl-10 h-11 rounded-xl" placeholder="Nhập địa chỉ của khách hàng" />
        </div>
      </div>

      <div className="flex justify-end pt-3 border-t">
        <Button type="submit" className="h-11 px-6 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-sm shadow-lg shadow-indigo-600/10" disabled={formState.isSubmitting}>
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}