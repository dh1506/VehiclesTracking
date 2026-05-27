import { useNavigate } from 'react-router-dom'
import { useCreateVehicle } from '../../features/vehicles/hooks/useVehicleMutations'
import VehicleForm from '../../features/vehicles/components/VehicleForm'
import type { VehicleFormValues } from '../../schemas/vehicle.schema'
import { toast } from 'sonner'

export default function CreateVehiclePage() {
  const create = useCreateVehicle()
  const navigate = useNavigate()

  const onSubmit = async (values: VehicleFormValues) => {
    try {
      await create.mutateAsync(values)
      toast.success('Tạo phương tiện thành công')
      navigate('/vehicles')
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi tạo phương tiện')
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tạo phương tiện mới</h1>
      <VehicleForm onSubmit={onSubmit} />
    </div>
  )
}
