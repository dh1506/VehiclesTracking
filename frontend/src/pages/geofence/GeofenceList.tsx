// src/pages/geofence/GeofenceList.tsx
import { useState } from 'react';
import { useGeofences } from '../../features/geofence/hooks/useGeofences';
import { useCreateGeofence, useUpdateGeofence, useDeleteGeofence } from '../../features/geofence/hooks/useGeofenceMutations';
import { Button } from '../../components/ui/button';
import GeofenceForm from '../../features/geofence/components/GeofenceForm';
import { toast } from 'sonner';
import { Map, Edit3, Trash2, CheckCircle2, XCircle, Compass, Plus, X } from 'lucide-react';

export default function GeofenceListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGeofence, setEditingGeofence] = useState<any | null>(null);

  const { data, isLoading, refetch } = useGeofences();
  const createMutation = useCreateGeofence();
  const updateMutation = useUpdateGeofence();
  const deleteMutation = useDeleteGeofence();

  const handleOpenAddModal = () => {
    setEditingGeofence(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (geofence: any) => {
    setEditingGeofence({
      zoneName: geofence.geofenceName,
      description: geofence.polygonData || '',
      latitude: Number(geofence.centerLat),
      longitude: Number(geofence.centerLon),
      radiusMeters: Number(geofence.radiusMeter),
      isActive: geofence.isActive,
      id: geofence.geofenceId
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (values: any) => {
    try {
      if (editingGeofence) {
        await updateMutation.mutateAsync({
          id: editingGeofence.id,
          payload: values,
        });
        toast.success('Cập nhật vùng an toàn thành công');
      } else {
        await createMutation.mutateAsync({
          ...values,
          type: 'circle'
        });
        toast.success('Thiết lập vùng cấm mới hoạt động');
      }
      setIsModalOpen(false);
      refetch();
    } catch (err: any) {
      toast.error(err?.message || 'Có lỗi xảy ra, vui lòng thực hiện lại');
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa vùng giám sát này không?')) return;
    try {
      await deleteMutation.mutateAsync(id);
      toast.success('Xóa vùng giám sát thành công');
      refetch();
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi xóa vùng giám sát');
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
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Vùng địa giới (Geofence)</h1>
          <p className="text-sm text-slate-500">Thiết lập các giới hạn di chuyển an toàn và nhận cảnh báo khi xe đi lệch.</p>
        </div>
        <Button onClick={handleOpenAddModal} className="shadow-lg shadow-indigo-600/10 gap-1.5">
          <Plus className="h-4 w-4" /> Thiết lập vùng cấm mới
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-semibold">
                <th className="p-4 pl-6">Tên vùng giám sát</th>
                <th className="p-4">Tọa độ tâm</th>
                <th className="p-4">Bán kính an toàn</th>
                <th className="p-4">Trạng thái</th>
                <th className="p-4 pr-6 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {data?.data?.map((geofence: any) => (
                <tr key={geofence.geofenceId} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-4 pl-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      <Map className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{geofence.geofenceName}</p>
                      <p className="text-xs text-slate-400">{geofence.polygonData || 'Vùng cảnh báo bán kính'}</p>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Compass className="h-3.5 w-3.5 text-slate-400" />
                      {/* Ép kiểu Number để loại bỏ lỗi sập trang do hàm toFixed */}
                      <span>
                        {Number(geofence.centerLat)?.toFixed(5)}°N , {Number(geofence.centerLon)?.toFixed(5)}°E
                      </span>
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-slate-700">
                    {Number(geofence.radiusMeter || 0)?.toLocaleString()} m
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${
                      geofence.isActive 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                        : 'bg-slate-50 text-slate-500 border-slate-100'
                    }`}>
                      {geofence.isActive ? (
                        <>
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          Đang kích hoạt
                        </>
                      ) : (
                        <>
                          <XCircle className="h-3.5 w-3.5 text-slate-400" />
                          Vô hiệu hóa
                        </>
                      )}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleOpenEditModal(geofence)}
                        className="h-8 w-8 p-0 text-slate-500 hover:text-slate-800"
                      >
                        <Edit3 className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDelete(geofence.geofenceId)}
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

      {/* POPUP MODAL THÊM / SỬA VÙNG ĐỊA GIỚI */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-100 flex flex-col space-y-4 max-h-[95vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-bold text-slate-800">
                {editingGeofence ? 'Cập nhật cấu hình vùng địa giới' : 'Thiết lập vùng địa giới giám sát'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                <X className="h-4 w-4 text-slate-400" />
              </button>
            </div>
            
            <GeofenceForm 
              initialValues={editingGeofence || undefined} 
              onSubmit={handleFormSubmit} 
              submitLabel={editingGeofence ? "Cập nhật tọa độ" : "Kích hoạt vùng giám sát"} 
            />
          </div>
        </div>
      )}
    </div>
  );
}