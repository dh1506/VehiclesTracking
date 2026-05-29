import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getRentals, createRental, updateRental } from '../../services/rental.service';
import { getVehicles } from '../../services/vehicle.service';
import { getCustomers } from '../../services/customer.service';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { toast } from 'sonner';
import { KeyRound, Calendar, User, CheckCircle2, Ban, Plus, X } from 'lucide-react';

export default function RentalListPage() {
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);

  const [vehicleId, setVehicleId] = useState<number>(0);
  const [customerId, setCustomerId] = useState<number>(0);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [rentalFee, setRentalFee] = useState<number>(0);

  const { data: rentalsData, isLoading } = useQuery({
    queryKey: ['rentals'],
    queryFn: () => getRentals(),
  });

  const { data: vehicles } = useQuery({
    queryKey: ['vehicles-available'],
    queryFn: () => getVehicles(),
  });

  const { data: customers } = useQuery({ 
    queryKey: ['customers-for-rentals'], 
    queryFn: () => getCustomers() 
  });

  const createMutation = useMutation({
    mutationFn: createRental,
    onSuccess: () => {
      toast.success('Hợp đồng thuê xe đã được đăng ký');
      setShowModal(false);
      queryClient.invalidateQueries({ queryKey: ['rentals'] });
    }
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: number, status: 'completed' | 'cancelled' }) =>
      updateRental(id, { status }),
    onSuccess: () => {
      toast.success('Hợp đồng đã hoàn thành lưu kho');
      queryClient.invalidateQueries({ queryKey: ['rentals'] });
    }
  });

  const handleCreateRental = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicleId || !customerId || !startTime || !endTime) {
      toast.error('Vui lòng hoàn thành mọi trường bắt buộc');
      return;
    }
    createMutation.mutate({
      vehicleId,
      customerId,
      startTime: new Date(startTime).toISOString(),
      endTime: new Date(endTime).toISOString(),
      rentalFee: Number(rentalFee)
    });
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
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Hợp đồng bàn giao xe</h1>
          <p className="text-sm text-slate-500">Giám sát toàn diện thời gian thuê và kích hoạt hoàn trả phương tiện.</p>
        </div>
        <Button onClick={() => setShowModal(true)} className="shadow-lg shadow-indigo-600/10 gap-2">
          <Plus className="h-4 w-4" /> Đăng ký hợp đồng mới
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-semibold">
                <th className="p-4 pl-6">Mã hợp đồng</th>
                <th className="p-4">Xe bàn giao</th>
                <th className="p-4">Chủ thuê xe</th>
                <th className="p-4">Thời gian thuê</th>
                <th className="p-4">Trạng thái hiện thời</th>
                <th className="p-4 pr-6 text-right">Quản trị trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {rentalsData?.data?.map((r: any) => (
                <tr key={r.rentalId} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-4 pl-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      <KeyRound className="h-5 w-5" />
                    </div>
                    <span className="font-mono font-bold text-slate-800">#{r.rentalId}</span>
                  </td>
                  <td className="p-4">
                    <p className="font-semibold text-slate-800">{r.vehicle?.vehicleName}</p>
                    <p className="text-xs font-mono text-slate-400">{r.vehicle?.plateNumber}</p>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      <span className="font-medium text-slate-700">{r.customer?.fullName}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500">
                    <div className="flex items-center gap-1.5 text-xs">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      <span>
                        {new Date(r.startTime).toLocaleDateString('vi-VN')} - {new Date(r.endTime).toLocaleDateString('vi-VN')}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${
                      r.rentalStatus === 'active' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                        : 'bg-slate-50 text-slate-500 border-slate-100'
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${r.rentalStatus === 'active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                      {r.rentalStatus}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    {r.rentalStatus === 'active' && (
                      <div className="flex justify-end gap-1.5">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => updateStatusMutation.mutate({ id: r.rentalId, status: 'completed' })}
                          className="h-8 text-xs font-bold gap-1 text-emerald-600 hover:bg-emerald-50"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" /> Thu hồi xe
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => updateStatusMutation.mutate({ id: r.rentalId, status: 'cancelled' })}
                          className="h-8 text-xs font-semibold gap-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                        >
                          <Ban className="h-3.5 w-3.5" /> Hủy
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Slide-over / Modal đăng ký hợp đồng */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <form onSubmit={handleCreateRental} className="bg-white p-6 rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 space-y-4 animate-scale-up">
            <div className="flex items-center justify-between border-b pb-3.5">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <KeyRound className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Lập hợp đồng bàn giao xe</h3>
              </div>
              <button type="button" onClick={() => setShowModal(false)} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                <X className="h-4 w-4 text-slate-400" />
              </button>
            </div>
            
            <div className="space-y-4 pt-1">
              {/* Chọn xe */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Lựa chọn xe rảnh rỗi</label>
                <select 
                  className="w-full border border-slate-200 h-11 px-3 rounded-xl text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none text-slate-700" 
                  onChange={(e) => setVehicleId(Number(e.target.value))}
                >
                  <option value="">-- Lựa chọn phương tiện trống --</option>
                  {vehicles?.data?.filter((v: any) => v.status === 'available').map((v: any) => (
                    <option key={v.vehicleId} value={v.vehicleId}>{v.vehicleName} ({v.plateNumber})</option>
                  ))}
                </select>
              </div>

              {/* Chọn khách hàng */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Chủ hợp đồng (Khách hàng)</label>
                <select 
                  className="w-full border border-slate-200 h-11 px-3 rounded-xl text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none text-slate-700" 
                  onChange={(e) => setCustomerId(Number(e.target.value))}
                >
                  <option value="">-- Chọn tài khoản khách hàng --</option>
                  {customers?.data?.map((c: any) => (
                    <option key={c.customerId} value={c.customerId}>{c.fullName} ({c.phone})</option>
                  ))}
                </select>
              </div>

              {/* Ngày giờ */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Ngày giờ bàn giao</label>
                  <Input type="datetime-local" className="h-10 rounded-xl text-xs" onChange={(e) => setStartTime(e.target.value)} />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Hạn thu hồi xe</label>
                  <Input type="datetime-local" className="h-10 rounded-xl text-xs" onChange={(e) => setEndTime(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Phí thuê xe thỏa thuận (VNĐ)</label>
              <Input 
                type="number" 
                placeholder="VD: 500000" 
                className="h-10 rounded-xl text-xs" 
                onChange={(e) => setRentalFee(Number(e.target.value))} 
              />
            </div>

            <div className="flex gap-2 justify-end pt-4 border-t border-slate-100">
              <Button type="button" variant="ghost" onClick={() => setShowModal(false)}>Hủy bỏ</Button>
              <Button type="submit" className="h-11 px-6 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-sm shadow-lg shadow-indigo-600/10">
                Kích hoạt bàn giao xe
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}