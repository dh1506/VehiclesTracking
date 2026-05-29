// src/pages/vehicles/VehicleList.tsx
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getVehicles } from '../../services/vehicle.service';
import { getDevices } from '../../services/iot-device.service';
import { 
  useCreateVehicle, 
  useUpdateVehicle, 
  useDeleteVehicle, 
  useAssignDevice, 
  useUnassignDevice 
} from '../../features/vehicles/hooks/useVehicleMutations';
import { Button } from '../../components/ui/button';
import VehicleForm from '../../features/vehicles/components/VehicleForm';
import { toast } from 'sonner';
import { Car, Cable, Trash2, Edit3, Plus, X } from 'lucide-react';

const STATUS_PILLS: Record<string, { label: string, style: string }> = {
  available: { label: 'Sẵn sàng', style: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  rented: { label: 'Đang thuê', style: 'bg-blue-50 text-blue-700 border-blue-100' },
  maintenance: { label: 'Bảo trì', style: 'bg-amber-50 text-amber-700 border-amber-100' }
};

export default function VehicleListPage() {
  // Quản lý Modal Thêm/Sửa Phương Tiện
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<any | null>(null);

  // Quản lý Modal Gán Thiết Bị IoT
  const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(null);
  const [selectedDeviceId, setSelectedDeviceId] = useState<number | null>(null);

  // Queries tải dữ liệu
  const { data: vehiclesData, isLoading, refetch } = useQuery({
    queryKey: ['vehicles'],
    queryFn: () => getVehicles(),
  });

  const { data: devicesData } = useQuery({
    queryKey: ['iot-devices'],
    queryFn: () => getDevices(),
  });

  // Mutations thao tác dữ liệu
  const createMutation = useCreateVehicle();
  const updateMutation = useUpdateVehicle();
  const deleteMutation = useDeleteVehicle();
  const assignMutation = useAssignDevice();
  const unassignMutation = useUnassignDevice();

  // Khởi động Modal thêm xe mới
  const handleOpenAddModal = () => {
    setEditingVehicle(null);
    setIsFormModalOpen(true);
  };

  // Khởi động Modal sửa xe
  const handleOpenEditModal = (vehicle: any) => {
    setEditingVehicle(vehicle);
    setIsFormModalOpen(true);
  };

  // Xử lý gửi Form Thêm / Sửa
  const handleFormSubmit = async (values: any) => {
    try {
      if (editingVehicle) {
        await updateMutation.mutateAsync({
          id: editingVehicle.vehicleId,
          payload: values,
        });
        toast.success('Cập nhật thông tin phương tiện thành công');
      } else {
        await createMutation.mutateAsync(values);
        toast.success('Khai báo phương tiện mới thành công');
      }
      setIsFormModalOpen(false);
      refetch();
    } catch (err: any) {
      toast.error(err?.message || 'Có lỗi xảy ra, vui lòng thực hiện lại');
    }
  };

  // Xử lý liên kết thiết bị GPS
  const handleAssignDevice = async () => {
    if (!selectedVehicleId || !selectedDeviceId) return;
    try {
      await assignMutation.mutateAsync({ vehicleId: selectedVehicleId, deviceId: selectedDeviceId });
      toast.success('Gán thiết bị định vị thành công');
      setSelectedVehicleId(null);
      setSelectedDeviceId(null);
      refetch();
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi gán thiết bị');
    }
  };

  // Xử lý gỡ thiết bị GPS
  const handleUnassignDevice = async (vehicleId: number) => {
    if (!window.confirm('Hủy liên kết thiết bị thu phát GPS khỏi xe này?')) return;
    try {
      await unassignMutation.mutateAsync(vehicleId);
      toast.success('Hủy gán thiết bị thành công');
      refetch();
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi hủy gán');
    }
  };

  // Xử lý xóa xe
  const handleDeleteVehicle = async (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa vĩnh viễn phương tiện này khỏi hệ thống?')) return;
    try {
      await deleteMutation.mutateAsync(id);
      toast.success('Xóa phương tiện thành công');
      refetch();
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi xóa phương tiện');
    }
  };

  if (isLoading) return (
    <div className="p-8 flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
    </div>
  );

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
      {/* Header trang */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Hồ sơ phương tiện</h1>
          <p className="text-sm text-slate-500">Quản lý trực quan hồ sơ hành chính xe và kết nối phần cứng GPS.</p>
        </div>
        <Button onClick={handleOpenAddModal} className="shadow-lg shadow-indigo-600/10 gap-1.5">
          <Plus className="h-4 w-4" /> Khai báo xe mới
        </Button>
      </div>

      {/* Bảng thông tin */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-semibold">
                <th className="p-4 pl-6">Phương tiện</th>
                <th className="p-4">Biển số xe</th>
                <th className="p-4">Phân loại</th>
                <th className="p-4">Kết nối định vị</th>
                <th className="p-4">Trạng thái xe</th>
                <th className="p-4 pr-6 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {vehiclesData?.data?.map((v: any) => {
                const activeAssignment = v.deviceAssignments?.find((a: any) => a.isActive);
                const statusInfo = STATUS_PILLS[v.status as keyof typeof STATUS_PILLS] || { label: v.status || 'Chờ duyệt', style: 'bg-slate-50 text-slate-600' };

                return (
                  <tr key={v.vehicleId} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-4 pl-6 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                        <Car className="h-5 w-5" />
                      </div>
                      <span className="font-semibold text-slate-800">{v.vehicleName}</span>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-mono font-bold rounded-md border border-slate-200/50 text-xs">
                        {v.plateNumber}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500">{v.vehicleType}</td>
                    <td className="p-4">
                      {activeAssignment ? (
                        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-full text-xs font-semibold animate-fade-in">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          GPS: {activeAssignment.device?.serialNumber}
                          <button 
                            onClick={() => handleUnassignDevice(v.vehicleId)} 
                            className="text-[11px] text-rose-500 font-bold hover:underline ml-1 pl-1 border-l border-emerald-200"
                          >
                            Hủy gán
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => setSelectedVehicleId(v.vehicleId)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 hover:underline"
                        >
                          <Cable className="h-3.5 w-3.5" /> Gán thiết bị
                        </button>
                      )}
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border ${statusInfo.style}`}>
                        {statusInfo.label}
                      </span>
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleOpenEditModal(v)}
                          className="h-8 w-8 p-0 text-slate-500 hover:text-slate-800"
                        >
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleDeleteVehicle(v.vehicleId)}
                          className="h-8 w-8 p-0 text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* POPUP 1: MODAL THÊM / SỬA HỒ SƠ PHƯƠNG TIỆN */}
      {isFormModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl max-w-lg w-full shadow-2xl border border-slate-100 flex flex-col space-y-4 max-h-[90vh] overflow-y-auto animate-scale-up">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-bold text-slate-800">
                {editingVehicle ? 'Cập nhật hồ sơ phương tiện' : 'Khai báo phương tiện mới'}
              </h3>
              <button onClick={() => setIsFormModalOpen(false)} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                <X className="h-4 w-4 text-slate-400" />
              </button>
            </div>
            
            <VehicleForm 
              initialValues={editingVehicle || undefined} 
              onSubmit={handleFormSubmit} 
              submitLabel={editingVehicle ? "Cập nhật hồ sơ xe" : "Đăng ký lưu kho"} 
            />
          </div>
        </div>
      )}

      {/* POPUP 2: MODAL GÁN THIẾT BỊ ĐỊNH VỊ GPS */}
      {selectedVehicleId && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white p-6 rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 transform scale-100 transition-all space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <Cable className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Liên kết phần cứng</h3>
              </div>
              <button onClick={() => setSelectedVehicleId(null)} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                <X className="h-4 w-4 text-slate-400" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-slate-400">Chọn một mã thiết bị IoT có sẵn để đồng bộ dữ liệu vĩ độ, kinh độ GPS thực tế về xe.</p>
              
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Danh sách thiết bị trống</label>
                <select
                  className="w-full border border-slate-200 p-2.5 rounded-xl text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  onChange={(e) => setSelectedDeviceId(Number(e.target.value))}
                >
                  <option value="">-- Chọn một thiết bị GPS --</option>
                  {devicesData?.data?.map((d: any) => (
                    <option key={d.deviceId} value={d.deviceId}>
                      {d.serialNumber} (Topic: {d.mqttTopic || 'Chưa cấu hình'})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-2 justify-end pt-2">
              <Button variant="ghost" onClick={() => setSelectedVehicleId(null)}>Hủy bỏ</Button>
              <Button onClick={handleAssignDevice} disabled={!selectedDeviceId} className="shadow-lg shadow-indigo-600/10">
                Xác nhận gán xe
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}