import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import vehicleSchema from '../../../schemas/vehicle.schema'
import type { VehicleFormValues } from '../../../schemas/vehicle.schema'
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'

type Props = {
  initialValues?: Partial<VehicleFormValues>
  onSubmit: (values: VehicleFormValues) => Promise<void> | void
  submitLabel?: string
}

export function VehicleForm({ initialValues, onSubmit, submitLabel = 'Lưu' }: Props) {
  const { register, handleSubmit, formState } = useForm<VehicleFormValues>({ resolver: zodResolver(vehicleSchema), defaultValues: initialValues as any })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Biển số</label>
        <Input {...register('plateNumber')} />
        {formState.errors.plateNumber && <p className="text-sm text-red-600">{formState.errors.plateNumber.message}</p>}
      </div>

      <div>
        <label className="block text-sm mb-1">Tên phương tiện</label>
        <Input {...register('vehicleName')} />
      </div>

      <div>
        <label className="block text-sm mb-1">Loại</label>
        <Input {...register('vehicleType')} />
        {formState.errors.vehicleType && <p className="text-sm text-red-600">{formState.errors.vehicleType.message}</p>}
      </div>

      <div>
        <Button type="submit" disabled={formState.isSubmitting}>{submitLabel}</Button>
      </div>
    </form>
  )
}

export default VehicleForm
