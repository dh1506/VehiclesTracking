import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import iotDeviceSchema from '../../../schemas/iot-device.schema'
import type { IotDeviceFormValues } from '../../../schemas/iot-device.schema'
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'

type Props = {
  initialValues?: Partial<IotDeviceFormValues>
  onSubmit: (values: IotDeviceFormValues) => Promise<void> | void
  submitLabel?: string
}

export function IotDeviceForm({ initialValues, onSubmit, submitLabel = 'Lưu' }: Props) {
  const { register, handleSubmit, formState } = useForm<IotDeviceFormValues>({
    resolver: zodResolver(iotDeviceSchema),
    defaultValues: initialValues as any,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Serial Number</label>
        <Input {...register('serialNumber')} />
        {formState.errors.serialNumber && <p className="text-sm text-red-600">{formState.errors.serialNumber.message}</p>}
      </div>

      <div>
        <label className="block text-sm mb-1">MQTT Topic</label>
        <Input {...register('mqttTopic')} />
      </div>

      <div>
        <label className="block text-sm mb-1">SIM Number</label>
        <Input {...register('simNumber')} />
      </div>

      <div>
        <Button type="submit" disabled={formState.isSubmitting}>{submitLabel}</Button>
      </div>
    </form>
  )
}

export default IotDeviceForm
