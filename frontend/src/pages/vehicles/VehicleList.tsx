import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getVehicles } from '../../services/vehicle.service';
import { useDeleteVehicle } from '../../features/vehicles/hooks/useVehicleMutations';
import { Button } from '../../components/ui/button';
import { toast } from 'sonner';

export default function VehicleListPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['vehicles'],
    queryFn: () => getVehicles(),
  });
  const deleteMutation = useDeleteVehicle();

  const handleDelete = async (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa phương tiện này không?')) return;
    try {
      await deleteMutation.mutateAsync(id);
      toast.success('Xóa phương tiện thành công');
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi xóa phương tiện');
    }
  };

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Có lỗi khi tải danh sách</div>;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Danh sách phương tiện</h1>
        <Link to="/vehicles/new">
          <Button>Tạo phương tiện</Button>
        </Link>
      </div>
      <table className="w-full table-auto border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Biển số</th>
            <th className="p-2 text-left">Tên</th>
            <th className="p-2 text-left">Loại</th>
            <th className="p-2 text-left">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((v: any) => (
            <tr key={v.vehicleId} className="border-t hover:bg-slate-50">
              <td className="p-2">{v.vehicleId}</td>
              <td className="p-2">{v.plateNumber}</td>
              <td className="p-2">{v.vehicleName}</td>
              <td className="p-2">{v.vehicleType}</td>
              <td className="p-2 flex gap-2">
                <Link to={`/vehicles/${v.vehicleId}/edit`}>
                  <Button variant="outline" size="sm">Sửa</Button>
                </Link>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(v.vehicleId)}>
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
