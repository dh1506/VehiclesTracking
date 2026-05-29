import { useParams, useNavigate } from 'react-router-dom';
import { useVehicle } from '../../features/vehicles/hooks/useVehicle';
import { useUpdateVehicle } from '../../features/vehicles/hooks/useVehicleMutations';
import VehicleForm from '../../features/vehicles/components/VehicleForm';
import type { VehicleFormValues } from '../../schemas/vehicle.schema';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

export default function EditVehiclePage() {
  const { id } = useParams();
  const numericId = id ? Number(id) : undefined;
  const { data, isLoading, isError } = useVehicle(numericId);
  const update = useUpdateVehicle();
  const navigate = useNavigate();

  if (isLoading) return (
    <div className="p-8 flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
    </div>
  );
  if (isError) return <div className="p-8 text-center text-red-500">Không tìm thấy thông tin phương tiện yêu cầu.</div>;

  const initial = data?.data;

  const onSubmit = async (values: VehicleFormValues) => {
    try {
      if (!numericId) throw new Error('Mã phương tiện không hợp lệ');
      await update.mutateAsync({ id: numericId, payload: values });
      toast.success('Cập nhật hồ sơ phương tiện thành công');
      navigate('/vehicles');
    } catch (err: any) {
      toast.error(err?.message || 'Có lỗi xảy ra khi cập nhật hồ sơ');
    }
  };

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate('/vehicles')} 
          className="h-10 w-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-slate-800 hover:shadow-sm transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Cập nhật hồ sơ xe</h1>
          <p className="text-xs text-slate-400">Thay đổi biển số kiểm soát hoặc dòng xe của mã thiết bị #{numericId}.</p>
        </div>
      </div>

      <div className="pt-2">
        <VehicleForm initialValues={initial} onSubmit={onSubmit} submitLabel="Cập nhật thông tin" />
      </div>
    </div>
  );
}