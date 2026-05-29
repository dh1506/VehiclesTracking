import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getDevices } from '../../services/iot-device.service';
import { useCreateDevice, useUpdateDevice, useDeleteDevice } from '../../features/iot-device/hooks/useDeviceMutations';
import { Button } from '../../components/ui/button';
import IotDeviceForm from '../../features/iot-device/components/IotDeviceForm';
import { Cpu, Edit3, Trash2, Radio, Plus, X } from 'lucide-react';

export default function IotDeviceListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDevice, setEditingDevice] = useState<any | null>(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['iot-devices'],
    queryFn: () => getDevices(),
  });

  const createMutation = useCreateDevice();
  const updateMutation = useUpdateDevice();
  const deleteMutation = useDeleteDevice();

  const handleOpenAddModal = () => {
    setEditingDevice(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (device: any) => {
    setEditingDevice(device);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (values: any) => {
    try {
      if (editingDevice) {
        await updateMutation.mutateAsync({
          id: editingDevice.deviceId,
          payload: values,
        });
        toast.success('Cập nhật thông tin phần cứng thành công');
      } else {
        await createMutation.mutateAsync(values);
        toast.success('Đăng ký thiết bị IoT thành công');
      }
      setIsModalOpen(false);
      refetch();
    } catch (err: any) {
      toast.error(err?.message || 'Có lỗi xảy ra, vui lòng thử lại');
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa vĩnh viễn thiết bị phần cứng này không?')) return;
    try {
      await deleteMutation.mutateAsync(id);
      toast.success('Xóa thiết bị IoT thành công');
      refetch();
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi xóa thiết bị');
    }
  };

  if (isLoading) return (
    <div className="p-8 flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
    </div>
  );

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Danh sách thiết bị IoT</h1>
          <p className="text-sm text-slate-500">Quản lý các bộ thu phát tín hiệu GPS gắn trực tiếp vào các cổng OBD/nguồn điện trên xe.</p>
        </div>
        <Button onClick={handleOpenAddModal} className="shadow-lg shadow-indigo-600/10 gap-1.5">
          <Plus className="h-4 w-4" /> Đăng ký thiết bị mới
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-semibold">
                <th className="p-4 pl-6">Mã Seri phần cứng</th>
                <th className="p-4">MQTT Topic Đăng Ký</th>
                <th className="p-4">Số SIM Data</th>
                <th className="p-4">Trạng thái kết nối</th>
                <th className="p-4 pr-6 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {data?.data?.map((d: any) => (
                <tr key={d.deviceId} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-4 pl-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{d.serialNumber}</p>
                      <p className="text-xs text-slate-400">Thiết bị ID: #{d.deviceId}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    {d.mqttTopic ? (
                      <code className="px-2.5 py-1 bg-slate-100 text-slate-700 font-mono text-xs rounded-lg border border-slate-200/40">
                        {d.mqttTopic}
                      </code>
                    ) : (
                      <span className="text-slate-400 text-xs">Chưa cấu hình topic</span>
                    )}
                  </td>
                  <td className="p-4 font-semibold text-slate-600">{d.simNumber || '-'}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-xs font-semibold">
                      <Radio className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
                      Trực tuyến
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleOpenEditModal(d)}
                        className="h-8 w-8 p-0 text-slate-500 hover:text-slate-800"
                      >
                        <Edit3 className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDelete(d.deviceId)}
                        className="h-8 w-8 p-0 text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* POPUP MODAL THÊM / SỬA THIẾT BỊ IOT */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl max-w-lg w-full shadow-2xl border border-slate-100 flex flex-col space-y-4 max-h-[90vh] overflow-y-auto animate-scale-up">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-bold text-slate-800">
                {editingDevice ? 'Cấu hình lại kết nối phần cứng' : 'Đăng ký kết nối phần cứng GPS mới'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                <X className="h-4 w-4 text-slate-400" />
              </button>
            </div>
            
            <IotDeviceForm 
              initialValues={editingDevice || undefined} 
              onSubmit={handleFormSubmit} 
              submitLabel={editingDevice ? "Cập nhật thiết bị" : "Khai báo kích hoạt"} 
            />
          </div>
        </div>
      )}
    </div>
  );
}