import { Link } from 'react-router-dom';
import { useGeofences } from '../../features/geofence/hooks/useGeofences';
import { useDeleteGeofence } from '../../features/geofence/hooks/useGeofenceMutations';
import { Button } from '../../components/ui/button';
import { toast } from 'sonner';

export default function GeofenceListPage() {
  const { data, isLoading, error } = useGeofences();
  const deleteMutation = useDeleteGeofence();

  const handleDelete = async (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa vùng giám sát này không?')) return;
    try {
      await deleteMutation.mutateAsync(id);
      toast.success('Xóa vùng giám sát thành công');
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi xóa vùng giám sát');
    }
  };

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Có lỗi khi tải dữ liệu</div>;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Danh sách vùng giám sát</h1>
        <Link to="/geofences/new">
          <Button>Tạo geofence</Button>
        </Link>
      </div>
      <div className="overflow-x-auto bg-white shadow-sm rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Tên vùng</th>
              <th className="p-2 text-left">Vĩ độ</th>
              <th className="p-2 text-left">Kinh độ</th>
              <th className="p-2 text-left">Bán kính (m)</th>
              <th className="p-2 text-left">Trạng thái</th>
              <th className="p-2 text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((geofence: any) => (
              <tr key={geofence.geofenceId} className="border-t hover:bg-slate-50">
                <td className="p-2">{geofence.geofenceId}</td>
                <td className="p-2">{geofence.geofenceName}</td>
                <td className="p-2">{geofence.centerLat}</td>
                <td className="p-2">{geofence.centerLon}</td>
                <td className="p-2">{geofence.radiusMeter}</td>
                <td className="p-2">{geofence.isActive ? 'Hoạt động' : 'Không hoạt động'}</td>
                <td className="p-2 flex gap-2 flex-wrap">
                  <Link to={`/geofences/${geofence.geofenceId}/edit`}>
                    <Button variant="outline" size="sm">Sửa</Button>
                  </Link>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(geofence.geofenceId)}>
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {data?.data?.length === 0 && <div className="p-4 text-sm text-slate-600">Không có vùng giám sát nào.</div>}
      </div>
    </div>
  );
}
