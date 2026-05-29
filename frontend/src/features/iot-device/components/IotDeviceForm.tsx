// src/features/iot-device/components/IotDeviceForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import iotDeviceSchema from '../../../schemas/iot-device.schema';
import type { IotDeviceFormValues } from '../../../schemas/iot-device.schema';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { Cpu, Radio, CreditCard } from 'lucide-react';

type Props = {
  initialValues?: Partial<IotDeviceFormValues>;
  onSubmit: (values: IotDeviceFormValues) => Promise<void> | void;
  submitLabel?: string;
};

export function IotDeviceForm({ initialValues, onSubmit, submitLabel = 'Đăng ký thiết bị' }: Props) {
  const { register, handleSubmit, formState } = useForm<IotDeviceFormValues>({
    resolver: zodResolver(iotDeviceSchema),
    defaultValues: initialValues as any,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl bg-white text-left">
      {/* Serial Number */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Mã Serial phần cứng</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><Cpu className="h-4 w-4" /></span>
          <Input {...register('serialNumber')} className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500" placeholder="VD: GPS-990812-X" />
        </div>
        {formState.errors.serialNumber && <p className="text-xs text-rose-600 font-medium mt-1">{formState.errors.serialNumber.message}</p>}
      </div>

      {/* MQTT Topic */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Đường dẫn MQTT Topic nhận tín hiệu</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><Radio className="h-4 w-4" /></span>
          <Input {...register('mqttTopic')} className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500" placeholder="VD: vtracking/devices/gps_9908" />
        </div>
      </div>

      {/* SIM Number */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Số điện thoại thẻ SIM tích hợp</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400"><CreditCard className="h-4 w-4" /></span>
          <Input {...register('simNumber')} className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500" placeholder="VD: 0988.111.222 (Sim truyền dữ liệu)" />
        </div>
      </div>

      <div className="flex justify-end pt-3 border-t border-slate-50">
        <Button type="submit" className="h-11 px-6 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-sm shadow-lg shadow-indigo-600/10" disabled={formState.isSubmitting}>
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

export default IotDeviceForm;