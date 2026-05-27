// no React import needed
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useCreateDevice } from '../../features/iot-device/hooks/useDeviceMutations'
import IotDeviceForm from '../../features/iot-device/components/IotDeviceForm'
import type { IotDeviceFormValues } from '../../schemas/iot-device.schema'

export default function CreateIotDevicePage() {
  const navigate = useNavigate()
  const create = useCreateDevice()

  const onSubmit = async (values: IotDeviceFormValues) => {
    try {
      await create.mutateAsync(values)
      toast.success('Tạo thiết bị IoT thành công')
      navigate('/iot-devices')
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi tạo thiết bị IoT')
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tạo thiết bị IoT</h1>
      <IotDeviceForm onSubmit={onSubmit} submitLabel="Tạo" />
    </div>
  )
}
