import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGeofence } from '../../features/geofence/hooks/useGeofence';
import { useUpdateGeofence } from '../../features/geofence/hooks/useGeofenceMutations';
import GeofenceForm from '../../features/geofence/components/GeofenceForm';
import type { GeofenceFormValues } from '../../schemas/geofence.schema';
import { toast } from 'sonner';

export default function EditGeofencePage() {
  const params = useParams();
  const id = params.id ? Number(params.id) : undefined;
  const { data, isLoading, error } = useGeofence(id);
  const update = useUpdateGeofence();
  const navigate = useNavigate();

  const initialValues = useMemo(() => {
    if (!data?.data) return undefined;

    return {
      zoneName: data.data.geofenceName,
      description: data.data.polygonData,
      latitude: data.data.centerLat,
      longitude: data.data.centerLon,
      radiusMeters: data.data.radiusMeter,
      isActive: data.data.isActive,
    } as GeofenceFormValues;
  }, [data]);

  const onSubmit = async (values: GeofenceFormValues) => {
    if (!id) return;

    try {
      await update.mutateAsync({ id, payload: values });
      toast.success('Cập nhật vùng giám sát thành công');
      navigate('/geofences');
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi cập nhật vùng giám sát');
    }
  };

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Có lỗi khi tải vùng giám sát</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chỉnh sửa vùng giám sát</h1>
      <GeofenceForm initialValues={initialValues} onSubmit={onSubmit} submitLabel="Cập nhật" />
    </div>
  );
}
