import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useDevice } from '../../features/iot-device/hooks/useDevice'
import { useUpdateDevice } from '../../features/iot-device/hooks/useDeviceMutations'
import IotDeviceForm from '../../features/iot-device/components/IotDeviceForm'
import type { IotDeviceFormValues } from '../../schemas/iot-device.schema'

export default function EditIotDevicePage() {
  const { id } = useParams()
  const numericId = id ? Number(id) : undefined
  const { data, isLoading, isError } = useDevice(numericId)
  const update = useUpdateDevice()
  const navigate = useNavigate()

  if (isLoading) return <div className="p-6">Loading...</div>
  if (isError) return <div className="p-6 text-red-600">Không thể tải dữ liệu thiết bị</div>

  const initial = data?.data

  const onSubmit = async (values: IotDeviceFormValues) => {
    try {
      if (!numericId) throw new Error('ID thiết bị không hợp lệ')
      await update.mutateAsync({ id: numericId, payload: values })
      toast.success('Cập nhật thiết bị IoT thành công')
      navigate('/iot-devices')
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi cập nhật thiết bị')
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chỉnh sửa thiết bị IoT</h1>
      <IotDeviceForm initialValues={initial} onSubmit={onSubmit} submitLabel="Cập nhật" />
    </div>
  )
}
