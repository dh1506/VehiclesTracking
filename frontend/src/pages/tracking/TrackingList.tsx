// src/pages/tracking/TrackingList.tsx
import { useState, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTrackingHistory, useTrackingAlerts } from '../../features/tracking/hooks/useTracking';
import { useResolveAlert } from '../../features/tracking/hooks/useTrackingMutations';
import { trackingAlertsFilterSchema, trackingHistoryFilterSchema, type TrackingAlertsFilterValues, type TrackingHistoryFilterValues } from '../../schemas/tracking.schema';
import { Button } from '../../components/ui/button';
import { toast } from 'sonner';

// Cấu hình Map Leaflet
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { 
  Radio, AlertOctagon, 
  CheckCircle, RefreshCw, SlidersHorizontal, Compass, Clock
} from 'lucide-react';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Input } from '@/components/ui/input';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const latestDeviceIcon = L.divIcon({
  className: 'bg-transparent border-none', // Bắt buộc phải có để xóa nền trắng viền đen mặc định
  html: `<div class="relative flex h-6 w-6 overflow-visible">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-6 w-6 bg-indigo-600 border-2 border-white items-center justify-center shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-navigation"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
    </span>
  </div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

// Component tự động di chuyển camera lấy xe làm tiêu điểm
function AutoFocusDevice({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    if (center && center[0] && center[1] && !isNaN(center[0]) && !isNaN(center[1])) {
      // Đảm bảo Leaflet cập nhật lại kích thước khung chứa trước khi bay tới tiêu điểm
      map.invalidateSize();
      map.setView(center, 15); 
    }
  }, [center, map]);
  return null;
}

export default function TrackingListPage() {
  const [activeTab, setActiveTab] = useState<'history' | 'alerts'>('history');

  // Khai báo danh sách các số giờ (00 - 23) và phút (00 - 59) cho Dropdown
  const hours = useMemo(() => Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')), []);
  const minutes = useMemo(() => Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')), []);

  // Tạo danh sách 30 ngày gần nhất để chọn trong Dropdown Ngày
  const dateOptions = useMemo(() => {
    const options = [];
    const now = new Date();
    for (let i = 0; i < 30; i++) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      const label = i === 0 ? "Hôm nay" : i === 1 ? "Hôm qua" : d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
      const val = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
      options.push({ label, value: val });
    }
    return options;
  }, []);

  // --- QUẢN LÝ STATE DROPDOWN LỌC ISO ĐỘC LẬP ---
  // 1. Tab Hành trình GPS
  const [histStartDay, setHistStartDay] = useState(dateOptions[0].value);
  const [histStartHour, setHistStartHour] = useState('00');
  const [histStartMin, setHistStartMin] = useState('00');

  const [histEndDay, setHistEndDay] = useState(dateOptions[0].value);
  const [histEndHour, setHistEndHour] = useState('23');
  const [histEndMin, setHistEndMin] = useState('59');

  // 2. Tab Sự kiện Cảnh báo
  const [alertStartDay, setAlertStartDay] = useState(dateOptions[0].value);
  const [alertStartHour, setAlertStartHour] = useState('00');
  const [alertStartMin, setAlertStartMin] = useState('00');

  const [alertEndDay, setAlertEndDay] = useState(dateOptions[0].value);
  const [alertEndHour, setAlertEndHour] = useState('23');
  const [alertEndMin, setAlertEndMin] = useState('59');

  const [historyFilters, setHistoryFilters] = useState<TrackingHistoryFilterValues>({});
  const [alertsFilters, setAlertsFilters] = useState<TrackingAlertsFilterValues>({});

  const historyForm = useForm<TrackingHistoryFilterValues>({
    resolver: zodResolver(trackingHistoryFilterSchema),
  });
  const alertsForm = useForm<TrackingAlertsFilterValues>({
    resolver: zodResolver(trackingAlertsFilterSchema),
  });

  const historyQuery = useTrackingHistory(historyFilters, activeTab === 'history');
  const alertsQuery = useTrackingAlerts(alertsFilters, activeTab === 'alerts');
  const resolveMutation = useResolveAlert();

  // Hàm chuyển đổi ghép các mốc chọn từ Dropdown thành chuỗi ISO gửi đi
  const convertToISODate = (dayStr: string, hourStr: string, minStr: string) => {
    const localDate = new Date(`${dayStr}T${hourStr}:${minStr}:00`);
    return !isNaN(localDate.getTime()) ? localDate.toISOString() : '';
  };

  // Đồng bộ thời gian mặc định ban đầu (Mặc định lọc từ 00:00 đến 23:59 hôm nay)
  useEffect(() => {
    const today = dateOptions[0].value;
    
    // Khởi tạo tab Lịch sử
    historyForm.setValue('startTime', convertToISODate(today, '00', '00'));
    historyForm.setValue('endTime', convertToISODate(today, '23', '59'));

    // Khởi tạo tab Cảnh báo
    alertsForm.setValue('startTime', convertToISODate(today, '00', '00'));
    alertsForm.setValue('endTime', convertToISODate(today, '23', '59'));
  }, [dateOptions]);

  const handleHistorySubmit = (values: TrackingHistoryFilterValues) => {
    // Ép gộp thời gian trực tiếp khi bấm gửi để đảm bảo chuẩn ISO mới nhất được chọn
    const finalStart = convertToISODate(histStartDay, histStartHour, histStartMin);
    const finalEnd = convertToISODate(histEndDay, histEndHour, histEndMin);

    setHistoryFilters({
      ...values,
      startTime: finalStart,
      endTime: finalEnd
    });
    toast.success('Đang phân tích hành trình GPS di chuyển...');
  };

  const handleAlertsSubmit = (values: TrackingAlertsFilterValues) => {
    const finalStart = convertToISODate(alertStartDay, alertStartHour, alertStartMin);
    const finalEnd = convertToISODate(alertEndDay, alertEndHour, alertEndMin);

    setAlertsFilters({
      ...values,
      startTime: finalStart,
      endTime: finalEnd
    });
    toast.success('Đang lọc sự cố cảnh báo...');
  };

  const handleResolve = async (id: number) => {
    try {
      await resolveMutation.mutateAsync(id);
      toast.success('Đã xác nhận giải quyết sự cố cảnh báo thành công');
    } catch (err: any) {
      toast.error(err?.message || 'Không thể xử lý sự cố');
    }
  };

  // Trích xuất tọa độ di chuyển
  const polylinePositions: [number, number][] = useMemo(() => {
    if (!historyQuery.data?.data) return [];
    
    return historyQuery.data.data
      .map((item: any) => {
        // Tự động nhận diện trường tọa độ linh hoạt theo bất kỳ tên cột nào Database đang dùng
        const lat = item.lat ?? item.latitude ?? item.centerLat;
        const lon = item.lon ?? item.longitude ?? item.centerLon;
        return [Number(lat), Number(lon)] as [number, number];
      })
      // Lọc bỏ các tọa độ lỗi, NaN hoặc bằng 0
      .filter((pos) => !isNaN(pos[0]) && !isNaN(pos[1]) && pos[0] !== 0 && pos[1] !== 0);
  }, [historyQuery.data]);

  useEffect(() => {
    if (historyQuery.data?.data && historyQuery.data.data.length > 0) {
      console.log("Cấu trúc của 1 bản ghi GPS thật trong DB của bạn:", historyQuery.data.data[0]);
    }
  }, [historyQuery.data]);

  const maxSpeed = historyQuery.data?.data?.reduce((max: number, item: any) => (item.speed > max ? item.speed : max), 0) || 0;

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col xl:flex-row bg-slate-900 text-slate-100 overflow-hidden">
      
      {/* PANEL TRÁI: KHU VỰC ĐIỀU HÀNH BỘ LỌC ĐỘC LẬP */}
      <div className="w-full xl:w-[420px] bg-slate-950 border-r border-slate-800 flex flex-col justify-between shrink-0 z-10 shadow-2xl">
        
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="p-5 border-b border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="bg-indigo-600/15 text-indigo-400 p-2 rounded-xl border border-indigo-500/20">
                  <Radio className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <h2 className="font-extrabold text-white text-base tracking-wide uppercase">Trung tâm giám sát</h2>
                  <p className="text-[11px] text-slate-500 font-medium">Chọn ngày & giờ bằng Dropdown độc lập</p>
                </div>
              </div>
            </div>

            {/* Bộ chuyển Tab */}
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800/80">
              <button 
                onClick={() => setActiveTab('history')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'history' 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/15' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Hành trình GPS
              </button>
              <button 
                onClick={() => setActiveTab('alerts')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'alerts' 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/15' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Sự kiện cảnh báo
              </button>
            </div>
          </div>

          {/* TAB 1: TRUY VẾT HÀNH TRÌNH GPS */}
          {activeTab === 'history' && (
            <div className="p-5 space-y-6">
              <form onSubmit={historyForm.handleSubmit(handleHistorySubmit)} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Mã số xe cần định vị</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500"><Compass className="h-4 w-4" /></span>
                    <Input 
                      type="number" 
                      {...historyForm.register('vehicleId')} 
                      className="bg-slate-900 border-slate-800 pl-10 text-white h-11 rounded-xl focus:ring-2 focus:ring-indigo-500 text-xs" 
                      placeholder="Nhập ID phương tiện"
                    />
                  </div>
                </div>

                {/* Hộp lọc thời gian bắt đầu */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80 space-y-2.5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-indigo-400" /> Thời gian bắt đầu (startTime)
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <select value={histStartDay} onChange={(e) => setHistStartDay(e.target.value)} className="bg-slate-950 border border-slate-800 text-slate-300 h-10 rounded-xl px-2 text-[11px] focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                      {dateOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                    <select value={histStartHour} onChange={(e) => setHistStartHour(e.target.value)} className="bg-slate-950 border border-slate-800 text-slate-300 h-10 rounded-xl px-2 text-[11px] focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                      {hours.map(h => <option key={h} value={h}>{h} giờ</option>)}
                    </select>
                    <select value={histStartMin} onChange={(e) => setHistStartMin(e.target.value)} className="bg-slate-950 border border-slate-800 text-slate-300 h-10 rounded-xl px-2 text-[11px] focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                      {minutes.map(m => <option key={m} value={m}>{m} phút</option>)}
                    </select>
                  </div>
                </div>

                {/* Hộp lọc thời gian kết thúc */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80 space-y-2.5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-indigo-400" /> Thời gian kết thúc (endTime)
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <select value={histEndDay} onChange={(e) => setHistEndDay(e.target.value)} className="bg-slate-950 border border-slate-800 text-slate-300 h-10 rounded-xl px-2 text-[11px] focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                      {dateOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                    <select value={histEndHour} onChange={(e) => setHistEndHour(e.target.value)} className="bg-slate-950 border border-slate-800 text-slate-300 h-10 rounded-xl px-2 text-[11px] focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                      {hours.map(h => <option key={h} value={h}>{h} giờ</option>)}
                    </select>
                    <select value={histEndMin} onChange={(e) => setHistEndMin(e.target.value)} className="bg-slate-950 border border-slate-800 text-slate-300 h-10 rounded-xl px-2 text-[11px] focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                      {minutes.map(m => <option key={m} value={m}>{m} phút</option>)}
                    </select>
                  </div>
                </div>

                <Button className="w-full h-11 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-xs shadow-lg" type="submit">
                  Lọc lộ trình di chuyển
                </Button>
              </form>

              {/* Lịch sử tọa độ di chuyển */}
              <div className="border-t border-slate-800/80 pt-5 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tọa độ GPS gần nhất</h4>
                <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                  {historyQuery.data?.data?.map((item: any, idx: number) => (
                    <div key={idx} className="relative pl-6 pb-2 border-l border-slate-800 last:border-0 last:pb-0 animate-fade-in">
                      <span className="absolute left-[-4.5px] top-1.5 h-2 w-2 rounded-full bg-indigo-500" />
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/60 text-[11px] space-y-1">
                        <div className="flex justify-between font-semibold text-slate-300">
                          <span>Vĩ độ/Kinh độ: {item.lat}, {item.lon}</span>
                          <span className="text-indigo-400">{item.speed ?? 0} km/h</span>
                        </div>
                        <p className="text-slate-500">{new Date(item.recordedAt).toLocaleString('vi-VN')}</p>
                      </div>
                    </div>
                  ))}
                  {(!historyQuery.data?.data || historyQuery.data.data.length === 0) && (
                    <div className="text-center p-6 text-xs text-slate-600">Chọn xe và mốc thời gian bằng Dropdown để truy xuất GPS.</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: QUẢN LÝ CẢNH BÁO SỰ CỐ */}
          {activeTab === 'alerts' && (
            <div className="p-5 space-y-6">
              <form onSubmit={alertsForm.handleSubmit(handleAlertsSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">Mã số xe</label>
                    <Input type="text" {...alertsForm.register('vehicleId')} className="bg-slate-900 border-slate-800 text-white h-11 rounded-xl placeholder-slate-600 text-xs" placeholder="ID xe" />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">Kiểu sự cố</label>
                    <select {...alertsForm.register('alertType')} className="w-full bg-slate-900 border border-slate-800 text-slate-300 h-11 rounded-xl px-2.5 text-xs focus:ring-2 focus:ring-indigo-500">
                      <option value="">Tất cả</option>
                      <option value="accident">Tai nạn</option>
                      <option value="impact">Va chạm</option>
                      <option value="out_of_zone">Vượt vùng</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Trạng thái xử lý</label>
                  <select {...alertsForm.register('isResolved')} className="w-full bg-slate-900 border border-slate-800 text-slate-300 h-11 rounded-xl px-3 text-xs focus:ring-2 focus:ring-indigo-500">
                    <option value="">Tất cả trạng thái</option>
                    <option value="true">Đã giải quyết</option>
                    <option value="false">Chưa giải quyết</option>
                  </select>
                </div>

                {/* Hộp lọc thời gian bắt đầu của Cảnh báo */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80 space-y-2.5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-rose-400" /> Thời gian phát sinh sự cố từ
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <select value={alertStartDay} onChange={(e) => setAlertStartDay(e.target.value)} className="bg-slate-950 border border-slate-800 text-slate-300 h-10 rounded-xl px-2 text-[11px] focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                      {dateOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                    <select value={alertStartHour} onChange={(e) => setAlertStartHour(e.target.value)} className="bg-slate-950 border border-slate-800 text-slate-300 h-10 rounded-xl px-2 text-[11px] focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                      {hours.map(h => <option key={h} value={h}>{h} giờ</option>)}
                    </select>
                    <select value={alertStartMin} onChange={(e) => setAlertStartMin(e.target.value)} className="bg-slate-950 border border-slate-800 text-slate-300 h-10 rounded-xl px-2 text-[11px] focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                      {minutes.map(m => <option key={m} value={m}>{m} phút</option>)}
                    </select>
                  </div>
                </div>

                {/* Hộp lọc thời gian kết thúc của Cảnh báo */}
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80 space-y-2.5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-rose-400" /> Cho đến mốc thời điểm
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <select value={alertEndDay} onChange={(e) => setAlertEndDay(e.target.value)} className="bg-slate-950 border border-slate-800 text-slate-300 h-10 rounded-xl px-2 text-[11px] focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                      {dateOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                    <select value={alertEndHour} onChange={(e) => setAlertEndHour(e.target.value)} className="bg-slate-950 border border-slate-800 text-slate-300 h-10 rounded-xl px-2 text-[11px] focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                      {hours.map(h => <option key={h} value={h}>{h} giờ</option>)}
                    </select>
                    <select value={alertEndMin} onChange={(e) => setAlertEndMin(e.target.value)} className="bg-slate-950 border border-slate-800 text-slate-300 h-10 rounded-xl px-2 text-[11px] focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                      {minutes.map(m => <option key={m} value={m}>{m} phút</option>)}
                    </select>
                  </div>
                </div>

                <Button type="submit" className="w-full h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-xs font-bold shadow-lg">Lọc sự kiện khẩn</Button>
              </form>

              {/* Danh sách các Thẻ sự cố khẩn cấp */}
              <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                {alertsQuery.data?.data?.map((alert: any) => (
                  <div key={alert.alertId} className={`p-4 rounded-xl border flex flex-col justify-between space-y-3 animate-fade-in ${
                    alert.isAcknowledged 
                      ? 'bg-slate-900/40 border-slate-800/80 text-slate-400' 
                      : 'bg-rose-950/20 border-rose-900/30 text-rose-200'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex gap-2">
                        <AlertOctagon className={`h-4 w-4 shrink-0 mt-0.5 ${alert.isAcknowledged ? 'text-slate-500' : 'text-rose-500'}`} />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider">Sự kiện: {alert.alertType}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">Xe: {alert.vehicle?.plateNumber || `ID: ${alert.vehicleId}`}</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-500">{new Date(alert.createdAt).toLocaleTimeString('vi-VN')}</span>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-800/50 pt-2.5">
                      <span className="text-[10px]">{alert.isAcknowledged ? 'Đã giải tỏa xong' : 'Yêu cầu xử lý'}</span>
                      {!alert.isAcknowledged && (
                        <Button 
                          size="sm" 
                          onClick={() => handleResolve(alert.alertId)}
                          className="h-7 px-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-[10px] font-bold"
                        >
                          <CheckCircle className="h-3 w-3 mr-1" /> Xác thực xong
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Chân trang */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><RefreshCw className="h-3 w-3 text-indigo-500 animate-spin" /> Kết nối MQTT Gateway ổn định</span>
          <span>V-TRACKING HUD</span>
        </div>
      </div>

      {/* PANEL PHẢI: BẢN ĐỒ VÀ HUD THÔNG TIN */}
      <div className="flex-1 h-full relative">
        {/* HUD nổi bên trên bản đồ */}
        <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap gap-3 pointer-events-none">
          <div className="bg-slate-950/85 backdrop-blur-md border border-slate-800 p-3.5 rounded-2xl flex items-center gap-3.5 shadow-2xl pointer-events-auto">
            <div className="h-9 w-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Hành trình GPS</p>
              <h4 className="text-sm font-bold text-white mt-0.5">
                {polylinePositions.length > 0 ? `Đã vẽ ${polylinePositions.length} điểm tọa độ` : 'Chưa lọc hành trình'}
              </h4>
            </div>
          </div>

          {polylinePositions.length > 0 && (
            <div className="bg-slate-950/85 backdrop-blur-md border border-slate-800 p-3.5 rounded-2xl flex items-center gap-3.5 shadow-2xl pointer-events-auto animate-fade-in">
              <div className="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <SlidersHorizontal className="h-5 w-5 animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Vận tốc tối đa ghi nhận</p>
                <h4 className="text-sm font-bold text-white mt-0.5">{maxSpeed} km/h</h4>
              </div>
            </div>
          )}
        </div>

        {/* Bản đồ Leaflet */}
        <MapContainer center={[21.0285, 105.8542]} zoom={13} className="h-full w-full grayscale-[15%] contrast-[105%]">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {polylinePositions.length > 0 && (
            <>
              {/* Tự động di chuyển camera lấy điểm cuối cùng làm tiêu điểm trung tâm */}
              {polylinePositions[polylinePositions.length - 1] && (
                <AutoFocusDevice center={polylinePositions[polylinePositions.length - 1]} />
              )}

              {/* Vẽ lộ trình di chuyển */}
              <Polyline positions={polylinePositions} color="#818CF8" weight={8} opacity={0.2} />
              <Polyline positions={polylinePositions} color="#4F46E5" weight={4} opacity={0.9} />
              
              {/* Điểm xuất phát của xe */}
              {polylinePositions[0] && (
                <Marker position={polylinePositions[0]} icon={DefaultIcon}>
                  <Popup>
                    <div className="text-xs text-slate-800">
                      <p className="font-bold text-indigo-600">Điểm xuất phát hành trình</p>
                    </div>
                  </Popup>
                </Marker>
              )}

              {/* Điểm hoạt động hiện tại (Sử dụng Icon radar phát sóng) */}
              {polylinePositions[polylinePositions.length - 1] && (
                <Marker position={polylinePositions[polylinePositions.length - 1]} icon={latestDeviceIcon}>
                  <Popup>
                    <div className="text-xs text-slate-800 space-y-1">
                      <p className="font-bold text-indigo-600">Vị trí hiện tại của thiết bị</p>
                      <p>Vận tốc ghi nhận: <span className="font-bold">{maxSpeed} km/h</span></p>
                    </div>
                  </Popup>
                </Marker>
              )}
            </>
          )}
        </MapContainer>
      </div>
    </div>
  );
}