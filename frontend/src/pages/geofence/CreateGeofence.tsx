import { useNavigate } from 'react-router-dom';
import { useCreateGeofence } from '../../features/geofence/hooks/useGeofenceMutations';
import GeofenceForm from '../../features/geofence/components/GeofenceForm';
import type { GeofenceFormValues } from '../../schemas/geofence.schema';
import { toast } from 'sonner';

export default function CreateGeofencePage() {
  const create = useCreateGeofence();
  const navigate = useNavigate();

  const onSubmit = async (values: GeofenceFormValues) => {
    try {
      await create.mutateAsync(values);
      toast.success('Tạo vùng giám sát thành công');
      navigate('/geofences');
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi tạo vùng giám sát');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tạo vùng giám sát mới</h1>
      <GeofenceForm onSubmit={onSubmit} />
    </div>
  );
}
