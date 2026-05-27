import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { geofenceSchema } from '../../../schemas/geofence.schema';
import type { GeofenceFormValues } from '../../../schemas/geofence.schema';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';

type Props = {
  initialValues?: Partial<GeofenceFormValues>;
  onSubmit: (values: GeofenceFormValues) => Promise<void> | void;
  submitLabel?: string;
};

export function GeofenceForm({ initialValues, onSubmit, submitLabel = 'Lưu' }: Props) {
  const { register, handleSubmit, formState } = useForm<GeofenceFormValues>({
    resolver: zodResolver(geofenceSchema) as any,
    defaultValues: initialValues as any,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Tên vùng</label>
        <Input {...register('zoneName')} />
        {formState.errors.zoneName && <p className="text-sm text-red-600">{formState.errors.zoneName.message}</p>}
      </div>

      <div>
        <label className="block text-sm mb-1">Mô tả</label>
        <textarea {...register('description')} rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2" />
        {formState.errors.description && <p className="text-sm text-red-600">{formState.errors.description.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Vĩ độ</label>
          <Input type="number" step="any" {...register('latitude', { valueAsNumber: true })} />
          {formState.errors.latitude && <p className="text-sm text-red-600">{formState.errors.latitude.message}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Kinh độ</label>
          <Input type="number" step="any" {...register('longitude', { valueAsNumber: true })} />
          {formState.errors.longitude && <p className="text-sm text-red-600">{formState.errors.longitude.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Bán kính (m)</label>
        <Input type="number" step="any" {...register('radiusMeters', { valueAsNumber: true })} />
        {formState.errors.radiusMeters && <p className="text-sm text-red-600">{formState.errors.radiusMeters.message}</p>}
      </div>

      <div className="flex items-center gap-2">
        <input id="isActive" type="checkbox" {...register('isActive')} className="h-4 w-4" />
        <label htmlFor="isActive" className="text-sm">Kích hoạt</label>
      </div>

      <div>
        <Button type="submit" disabled={formState.isSubmitting}>{submitLabel}</Button>
      </div>
    </form>
  );
}

export default GeofenceForm;
