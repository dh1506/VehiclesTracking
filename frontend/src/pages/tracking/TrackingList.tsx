import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTrackingHistory, useTrackingAlerts } from '../../features/tracking/hooks/useTracking';
import { useResolveAlert } from '../../features/tracking/hooks/useTrackingMutations';
import { trackingAlertsFilterSchema, trackingHistoryFilterSchema, type TrackingAlertsFilterValues, type TrackingHistoryFilterValues } from '../../schemas/tracking.schema';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { toast } from 'sonner';

export default function TrackingListPage() {
  const [activeTab, setActiveTab] = useState<'history' | 'alerts'>('history');
  const [historyFilters, setHistoryFilters] = useState<TrackingHistoryFilterValues>({});
  const [alertsFilters, setAlertsFilters] = useState<TrackingAlertsFilterValues>({});
  const historyForm = useForm<TrackingHistoryFilterValues>({
    resolver: zodResolver(trackingHistoryFilterSchema),
    defaultValues: {},
  });
  const alertsForm = useForm<TrackingAlertsFilterValues>({
    resolver: zodResolver(trackingAlertsFilterSchema),
    defaultValues: {},
  });

  const historyQuery = useTrackingHistory(historyFilters, activeTab === 'history');
  const alertsQuery = useTrackingAlerts(alertsFilters, activeTab === 'alerts');
  const resolveMutation = useResolveAlert();

  const handleHistorySubmit = (values: TrackingHistoryFilterValues) => {
    setHistoryFilters(values);
  };

  const handleAlertsSubmit = (values: TrackingAlertsFilterValues) => {
    setAlertsFilters(values);
  };

  const handleResolve = async (id: number) => {
    try {
      await resolveMutation.mutateAsync(id);
      toast.success('Đã xử lý cảnh báo thành công');
    } catch (err: any) {
      toast.error(err?.message || 'Lỗi khi xử lý cảnh báo');
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold">Báo cáo định vị</h1>
          <p className="text-sm text-slate-600">Xem lịch sử GPS và cảnh báo phương tiện.</p>
        </div>
        <div className="flex gap-2">
          <Button variant={activeTab === 'history' ? 'default' : 'outline'} onClick={() => setActiveTab('history')}>
            Lịch sử
          </Button>
          <Button variant={activeTab === 'alerts' ? 'default' : 'outline'} onClick={() => setActiveTab('alerts')}>
            Cảnh báo
          </Button>
        </div>
      </div>

      {activeTab === 'history' ? (
        <div className="space-y-4">
          <form onSubmit={historyForm.handleSubmit(handleHistorySubmit)} className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm mb-1">ID xe</label>
              <Input type="text" {...historyForm.register('vehicleId')} />
            </div>
            <div>
              <label className="block text-sm mb-1">Bắt đầu</label>
              <Input type="datetime-local" {...historyForm.register('startTime')} />
            </div>
            <div>
              <label className="block text-sm mb-1">Kết thúc</label>
              <Input type="datetime-local" {...historyForm.register('endTime')} />
            </div>
            <div className="md:col-span-3 flex gap-2">
              <Button type="submit">Lọc lịch sử</Button>
              <Button type="button" variant="outline" onClick={() => { historyForm.reset(); setHistoryFilters({}); }}>
                Xóa bộ lọc
              </Button>
            </div>
          </form>

          {historyQuery.isLoading ? (
            <div>Loading...</div>
          ) : historyQuery.error ? (
            <div className="text-red-600">Có lỗi khi tải lịch sử định vị</div>
          ) : (
            <div className="overflow-x-auto bg-white shadow-sm rounded-lg">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-2 text-left">ID log</th>
                    <th className="p-2 text-left">ID xe</th>
                    <th className="p-2 text-left">Vĩ độ</th>
                    <th className="p-2 text-left">Kinh độ</th>
                    <th className="p-2 text-left">Vận tốc</th>
                    <th className="p-2 text-left">Thời gian</th>
                  </tr>
                </thead>
                <tbody>
                  {historyQuery.data?.data?.map((item: any) => (
                    <tr key={item.gpsLogId ?? `${item.vehicleId}-${item.recordedAt}`} className="border-t hover:bg-slate-50">
                      <td className="p-2">{item.gpsLogId}</td>
                      <td className="p-2">{item.vehicleId}</td>
                      <td className="p-2">{item.lat}</td>
                      <td className="p-2">{item.lon}</td>
                      <td className="p-2">{item.speed ?? '-'}</td>
                      <td className="p-2">{item.recordedAt}</td>
                    </tr>
                  ))}
                  {historyQuery.data?.data?.length === 0 && (
                    <tr>
                      <td colSpan={6} className="p-4 text-center text-slate-600">
                        Không tìm thấy bản ghi lịch sử.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <form onSubmit={alertsForm.handleSubmit(handleAlertsSubmit)} className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="block text-sm mb-1">ID xe</label>
              <Input type="text" {...alertsForm.register('vehicleId')} />
            </div>
            <div>
              <label className="block text-sm mb-1">Loại cảnh báo</label>
              <select {...alertsForm.register('alertType')} className="w-full rounded-md border border-slate-300 px-3 py-2">
                <option value="">Tất cả</option>
                <option value="accident">Tai nạn</option>
                <option value="impact">Va chạm</option>
                <option value="out_of_zone">Ra vùng</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Đã xử lý</label>
              <select {...alertsForm.register('isResolved')} className="w-full rounded-md border border-slate-300 px-3 py-2">
                <option value="">Tất cả</option>
                <option value="true">Có</option>
                <option value="false">Chưa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Bắt đầu</label>
              <Input type="datetime-local" {...alertsForm.register('startTime')} />
            </div>
            <div>
              <label className="block text-sm mb-1">Kết thúc</label>
              <Input type="datetime-local" {...alertsForm.register('endTime')} />
            </div>
            <div className="md:col-span-4 flex gap-2">
              <Button type="submit">Lọc cảnh báo</Button>
              <Button type="button" variant="outline" onClick={() => { alertsForm.reset(); setAlertsFilters({}); }}>
                Xóa bộ lọc
              </Button>
            </div>
          </form>

          {alertsQuery.isLoading ? (
            <div>Loading...</div>
          ) : alertsQuery.error ? (
            <div className="text-red-600">Có lỗi khi tải cảnh báo</div>
          ) : (
            <div className="overflow-x-auto bg-white shadow-sm rounded-lg">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-2 text-left">ID cảnh báo</th>
                    <th className="p-2 text-left">Xe</th>
                    <th className="p-2 text-left">Loại</th>
                    <th className="p-2 text-left">Thời gian</th>
                    <th className="p-2 text-left">Trạng thái</th>
                    <th className="p-2 text-left">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {alertsQuery.data?.data?.map((alert: any) => (
                    <tr key={alert.alertId} className="border-t hover:bg-slate-50">
                      <td className="p-2">{alert.alertId}</td>
                      <td className="p-2">{alert.vehicle?.plateNumber ?? alert.vehicleId}</td>
                      <td className="p-2">{alert.alertType}</td>
                      <td className="p-2">{alert.createdAt}</td>
                      <td className="p-2">{alert.isAcknowledged ? 'Đã xử lý' : 'Chưa xử lý'}</td>
                      <td className="p-2">
                        {!alert.isAcknowledged && (
                          <Button size="sm" onClick={() => handleResolve(alert.alertId)}>
                            Xử lý
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                  {alertsQuery.data?.data?.length === 0 && (
                    <tr>
                      <td colSpan={6} className="p-4 text-center text-slate-600">
                        Không có cảnh báo phù hợp.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
