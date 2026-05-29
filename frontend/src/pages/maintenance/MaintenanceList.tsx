// src/pages/maintenance/MaintenanceList.tsx
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getMaintenances, createMaintenance, deleteMaintenance } from '../../services/maintenance.service';
import { getVehicles } from '../../services/vehicle.service';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { toast } from 'sonner';
import { Wrench, CircleDollarSign, Plus, X, Trash2, AlignLeft } from 'lucide-react';

export default function MaintenanceListPage() {
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);

  // States quản lý Form thêm mới lịch bảo dưỡng
  const [vehicleId, setVehicleId] = useState<number>(0);
  const [type, setType] = useState('');
  const [cost, setCost] = useState<number>(0);
  const [notes, setNotes] = useState('');

  const { data: maintenanceData, isLoading } = useQuery({
    queryKey: ['maintenances'],
    queryFn: () => getMaintenances(),
  });

  const { data: vehicles } = useQuery({
    queryKey: ['vehicles'],
    queryFn: () => getVehicles(),
  });

  const createMutation = useMutation({
    mutationFn: createMaintenance,
    onSuccess: () => {
      toast.success('Ghi nhận nhật ký bảo dưỡng xe thành công');
      setShowModal(false);
      // Reset form states
      setVehicleId(0);
      setType('');
      setCost(0);
      setNotes('');
      queryClient.invalidateQueries({ queryKey: ['maintenances'] });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deleteMaintenance,
    onSuccess: () => {
      toast.success('Xóa bản ghi nhật ký bảo dưỡng thành công');
      queryClient.invalidateQueries({ queryKey: ['maintenances'] });
    }
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicleId || !type) {
      toast.error('Vui lòng điền đủ thông tin yêu cầu');
      return;
    }
    createMutation.mutate({
      vehicleId,
      maintenanceType: type,
      cost,
      notes // Notes này sẽ được gửi sang BE và lưu vào cột `description`
    });
  };

  const handleDelete = (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa nhật ký bảo dưỡng này?')) return;
    deleteMutation.mutate(id);
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
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Nhật ký bảo dưỡng xe</h1>
          <p className="text-sm text-slate-500 font-medium">Theo dõi lịch sử kỹ thuật sửa chữa, kiểm định phần cứng và chi phí thực tế.</p>
        </div>
        <Button onClick={() => setShowModal(true)} className="shadow-lg shadow-indigo-600/10 gap-2">
          <Plus className="h-4 w-4" /> Ghi nhận lịch bảo dưỡng
        </Button>
      </div>

      {/* Bảng thông tin đã nâng cấp */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-semibold">
                <th className="p-4 pl-6">Mã nhật ký</th>
                <th className="p-4">Phương tiện bảo trì</th>
                <th className="p-4">Loại hình sửa chữa</th>
                <th className="p-4">Chi phí (VNĐ)</th>
                <th className="p-4">Mô tả sự cố & kỹ thuật</th>
                <th className="p-4 pr-6 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {maintenanceData?.data?.map((m: any) => (
                <tr key={m.maintenanceId} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-4 pl-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <span className="font-mono font-bold text-slate-800">#{m.maintenanceId}</span>
                  </td>
                  <td className="p-4">
                    <p className="font-semibold text-slate-800">{m.vehicle?.vehicleName || 'Mã xe: ' + m.vehicleId}</p>
                    <p className="text-xs font-mono text-slate-400">{m.vehicle?.plateNumber}</p>
                  </td>
                  <td className="p-4 text-slate-700 font-medium">{m.maintenanceType}</td>
                  <td className="p-4 font-semibold text-slate-700">
                    <div className="flex items-center gap-1">
                      <CircleDollarSign className="h-4 w-4 text-emerald-500" />
                      <span>{m.cost?.toLocaleString('vi-VN') || 0} VNĐ</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500 max-w-sm truncate">
                    {m.description ? (
                      <div className="flex items-center gap-1.5">
                        <AlignLeft className="h-3.5 w-3.5 text-slate-400" />
                        <span>{m.description}</span>
                      </div>
                    ) : (
                      <span className="text-slate-300">Không có ghi chú</span>
                    )}
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleDelete(m.maintenanceId)}
                      className="h-8 w-8 p-0 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-full"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {(!maintenanceData?.data || maintenanceData.data.length === 0) && (
            <div className="p-8 text-center text-slate-400 text-sm">Chưa ghi nhận lịch sử bảo dưỡng nào của hệ thống xe.</div>
          )}
        </div>
      </div>

      {/* MODAL POPUP KHAI BÁO BẢO DƯỠNG */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <form onSubmit={handleCreate} className="bg-white p-6 rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 space-y-4 animate-scale-up">
            <div className="flex items-center justify-between border-b pb-3.5">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Nhật ký bảo dưỡng xe</h3>
              </div>
              <button type="button" onClick={() => setShowModal(false)} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                <X className="h-4 w-4 text-slate-400" />
              </button>
            </div>

            <div className="space-y-4 pt-1">
              {/* Chọn xe */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Phương tiện sửa chữa</label>
                <select 
                  className="w-full border border-slate-200 h-11 px-3 rounded-xl text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none text-slate-700" 
                  onChange={(e) => setVehicleId(Number(e.target.value))}
                >
                  <option value="">-- Chọn xe đưa vào bảo dưỡng --</option>
                  {vehicles?.data?.map((v: any) => (
                    <option key={v.vehicleId} value={v.vehicleId}>{v.vehicleName} ({v.plateNumber})</option>
                  ))}
                </select>
              </div>

              {/* Loại dịch vụ */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Nghiệp vụ kỹ thuật / Sửa chữa</label>
                <Input 
                  className="h-11 rounded-xl" 
                  placeholder="VD: Thay lọc dầu xe, Sửa mạch nguồn định vị GPS" 
                  onChange={(e) => setType(e.target.value)} 
                />
              </div>

              {/* Giá dự kiến */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Chi phí thực hiện (VNĐ)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <CircleDollarSign className="h-4 w-4 text-emerald-500" />
                  </span>
                  <Input 
                    type="number" 
                    className="pl-10 h-11 rounded-xl" 
                    placeholder="VD: 500000" 
                    onChange={(e) => setCost(Number(e.target.value))} 
                  />
                </div>
              </div>

              {/* Ghi chú */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Mô tả sự cố & Ghi chú kỹ thuật</label>
                <textarea 
                  className="w-full border border-slate-200 rounded-xl p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder-slate-400" 
                  rows={3} 
                  placeholder="Mô tả chi tiết tình trạng hỏng hóc hoặc linh kiện sửa chữa..." 
                  onChange={(e) => setNotes(e.target.value)} 
                />
              </div>
            </div>

            <div className="flex gap-2 justify-end pt-4 border-t border-slate-100">
              <Button type="button" variant="ghost" onClick={() => setShowModal(false)}>Hủy bỏ</Button>
              <Button type="submit" className="h-11 px-6 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-sm shadow-lg shadow-indigo-600/10">
                Lưu nhật ký bảo dưỡng
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}