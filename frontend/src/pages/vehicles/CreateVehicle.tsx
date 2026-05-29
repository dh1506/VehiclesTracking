import { useNavigate } from 'react-router-dom';
import { useCreateVehicle } from '../../features/vehicles/hooks/useVehicleMutations';
import VehicleForm from '../../features/vehicles/components/VehicleForm';
import type { VehicleFormValues } from '../../schemas/vehicle.schema';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

export default function CreateVehiclePage() {
  const create = useCreateVehicle();
  const navigate = useNavigate();

  const onSubmit = async (values: VehicleFormValues) => {
    try {
      await create.mutateAsync(values);
      toast.success('Khai báo phương tiện mới thành công');
      navigate('/vehicles');
    } catch (err: any) {
      toast.error(err?.message || 'Có lỗi xảy ra khi khai báo xe');
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
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Đăng ký phương tiện</h1>
          <p className="text-xs text-slate-400">Đăng ký mới hồ sơ xe hành chính vào hệ thống lưu trữ.</p>
        </div>
      </div>

      <div className="pt-2">
        <VehicleForm onSubmit={onSubmit} submitLabel="Đăng ký phương tiện" />
      </div>
    </div>
  );
}