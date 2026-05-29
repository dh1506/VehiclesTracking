// src/features/vehicles/components/VehicleForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import vehicleSchema from '../../../schemas/vehicle.schema';
import type { VehicleFormValues } from '../../../schemas/vehicle.schema';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { Car, CreditCard, Tag } from 'lucide-react';

type Props = {
  initialValues?: Partial<VehicleFormValues>;
  onSubmit: (values: VehicleFormValues) => Promise<void> | void;
  submitLabel?: string;
};

export function VehicleForm({ initialValues, onSubmit, submitLabel = 'Lưu thông tin' }: Props) {
  const { register, handleSubmit, formState } = useForm<VehicleFormValues>({ 
    resolver: zodResolver(vehicleSchema), 
    defaultValues: initialValues as any 
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-xl bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
      {/* Biển số xe */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Biển kiểm soát hành chính</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <CreditCard className="h-4 w-4" />
          </span>
          <Input 
            {...register('plateNumber')} 
            className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500"
            placeholder="VD: 30F-999.99"
          />
        </div>
        {formState.errors.plateNumber && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.plateNumber.message}</p>}
      </div>

      {/* Tên phương tiện */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Tên phương tiện</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <Car className="h-4 w-4" />
          </span>
          <Input 
            {...register('vehicleName')} 
            className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500"
            placeholder="VD: VinFast VF8"
          />
        </div>
      </div>

      {/* Phân loại phương tiện */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Phân loại / Dòng xe</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <Tag className="h-4 w-4" />
          </span>
          <Input 
            {...register('vehicleType')} 
            className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500"
            placeholder="VD: SUV, Sedan, Xe bán tải"
          />
        </div>
        {formState.errors.vehicleType && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.vehicleType.message}</p>}
      </div>

      <div className="flex justify-end pt-2">
        <Button 
          type="submit" 
          className="h-11 px-6 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/10 transition-all"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? 'Đang cập nhật lưu kho...' : submitLabel}
        </Button>
      </div>
    </form>
  );
}

export default VehicleForm;