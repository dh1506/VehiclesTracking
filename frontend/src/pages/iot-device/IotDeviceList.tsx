import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getDevices } from '../../services/iot-device.service';
import { useDeleteDevice } from '../../features/iot-device/hooks/useDeviceMutations';
import { Button } from '../../components/ui/button';

export default function IotDeviceListPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['iot-devices'],
    queryFn: () => getDevices(),
  });
  const deleteMutation = useDeleteDevice();

  const handleDelete = async (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa thiết bị này không?')) return;
    try {
      await deleteMutation.mutateAsync(id);
      toast.success('Xóa thiết bị IoT thành công');
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi xóa thiết bị IoT');
    }
  };

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Có lỗi khi tải dữ liệu</div>;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Thiết bị IoT</h1>
        <Link to="/iot-devices/new">
          <Button>Tạo thiết bị</Button>
        </Link>
      </div>
      <table className="w-full table-auto border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Serial Number</th>
            <th className="p-2 text-left">MQTT Topic</th>
            <th className="p-2 text-left">SIM</th>
            <th className="p-2 text-left">Trạng thái</th>
            <th className="p-2 text-left">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((d: any) => (
            <tr key={d.deviceId} className="border-t hover:bg-slate-50">
              <td className="p-2">{d.deviceId}</td>
              <td className="p-2">{d.serialNumber}</td>
              <td className="p-2">{d.mqttTopic || '-'}</td>
              <td className="p-2">{d.simNumber || '-'}</td>
              <td className="p-2">{d.active ? 'Active' : 'Inactive'}</td>
              <td className="p-2 flex gap-2">
                <Link to={`/iot-devices/${d.deviceId}/edit`}>
                  <Button variant="outline" size="sm">Sửa</Button>
                </Link>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(d.deviceId)}>
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
