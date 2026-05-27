import { useParams, useNavigate } from 'react-router-dom'
import { useVehicle } from '../../features/vehicles/hooks/useVehicle'
import { useUpdateVehicle } from '../../features/vehicles/hooks/useVehicleMutations'
import VehicleForm from '../../features/vehicles/components/VehicleForm'
import type { VehicleFormValues } from '../../schemas/vehicle.schema'
import { toast } from 'sonner'

export default function EditVehiclePage() {
  const { id } = useParams()
  const numericId = id ? Number(id) : undefined
  const { data, isLoading, isError } = useVehicle(numericId)
  const update = useUpdateVehicle()
  const navigate = useNavigate()

  if (isLoading) return <div className="p-6">Loading...</div>
  if (isError) return <div className="p-6 text-red-600">Không thể tải dữ liệu phương tiện</div>

  const initial = data?.data

  const onSubmit = async (values: VehicleFormValues) => {
    try {
      if (!numericId) throw new Error('ID phương tiện không hợp lệ')
      await update.mutateAsync({ id: numericId, payload: values })
      toast.success('Cập nhật phương tiện thành công')
      navigate('/vehicles')
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi cập nhật phương tiện')
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chỉnh sửa phương tiện</h1>
      <VehicleForm initialValues={initial} onSubmit={onSubmit} submitLabel="Cập nhật" />
    </div>
  )
}
