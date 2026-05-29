import { useQuery } from '@tanstack/react-query';
import { getDashboardStats } from '../../services/report.service';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Car, Users, ClipboardList, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const COLORS = {
  available: '#10B981', // Emerald hiện đại
  rented: '#3B82F6',    // Blue sang trọng
  maintenance: '#F59E0B' // Amber sắc nét
};

const STATUS_LABELS: Record<string, string> = {
  available: 'Sẵn sàng hoạt động',
  rented: 'Đang phục vụ khách',
  maintenance: 'Trong xưởng bảo dưỡng'
};

export default function DashboardPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: getDashboardStats,
  });

  if (isLoading) return (
    <div className="p-8 flex items-center justify-center h-96">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
    </div>
  );
  if (error) return (
    <div className="p-8 text-center text-red-500 font-medium">Không thể tải dữ liệu phân tích hệ thống.</div>
  );

  const stats = data?.data;

  const chartData = stats?.vehicleStatusCounts.map((item) => ({
    name: STATUS_LABELS[item.status] || item.status,
    value: item._count.vehicleId,
    status: item.status
  })) || [];

  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Tiêu đề & Lời chào */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Xin chào ngày mới!</h1>
          <p className="text-slate-500 mt-1">Dưới đây là hoạt động tổng thể của phi đội xe và các cảnh báo định vị địa giới.</p>
        </div>
        <div className="flex items-center gap-2 text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full font-medium border border-emerald-100 self-start">
          <ShieldCheck className="h-4 w-4" /> Hệ thống bảo mật & kết nối trực tuyến
        </div>
      </div>

      {/* Widget Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Tổng phương tiện', value: stats?.totalVehicles, icon: Car, bg: 'from-blue-500 to-blue-600', text: 'text-blue-600', shadow: 'shadow-blue-500/10' },
          { label: 'Tài khoản người dùng', value: stats?.totalUsers, icon: Users, bg: 'from-emerald-500 to-emerald-600', text: 'text-emerald-600', shadow: 'shadow-emerald-500/10' },
          { label: 'Hợp đồng cho thuê', value: stats?.activeRentals, icon: ClipboardList, bg: 'from-violet-500 to-violet-600', text: 'text-violet-600', shadow: 'shadow-violet-500/10' },
          { label: 'Cảnh báo đột nhập', value: stats?.unresolvedAlerts, icon: AlertTriangle, bg: 'from-rose-500 to-rose-600', text: 'text-rose-600', shadow: 'shadow-rose-500/10', alert: true },
        ].map((card, idx) => {
          const Icon = card.icon;
          return (
            <div key={idx} className={`bg-white rounded-2xl border border-slate-100 p-6 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 group hover:-translate-y-0.5 ${card.shadow}`}>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{card.label}</p>
                <h3 className={`text-3xl font-black ${card.alert && (stats?.unresolvedAlerts || 0) > 0 ? 'text-rose-600 animate-pulse' : 'text-slate-800'}`}>
                  {card.value}
                </h3>
              </div>
              <div className={`p-4 bg-gradient-to-br ${card.bg} text-white rounded-xl shadow-inner group-hover:scale-105 transition-transform`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Grid Biểu đồ & Tóm tắt hành động */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Biểu đồ */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-800">Phân bố trạng thái phi đội xe</h2>
              <p className="text-xs text-slate-400">Xem tỉ lệ % thời gian hoạt động của xe hiện tại</p>
            </div>
          </div>
          <div className="w-full min-w-0 relative">
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={280} minWidth={0}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={95}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[entry.status as keyof typeof COLORS] || '#94A3B8'} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-slate-400 text-sm">Chưa có dữ liệu phương tiện.</p>
            )}
          </div>
        </div>

        {/* Cột hành động & Lối tắt nhanh */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-800">Liên kết tác vụ nhanh</h2>
            <p className="text-xs text-slate-400">Các hoạt động điều phối viên thường sử dụng nhiều nhất.</p>
            
            <div className="space-y-2.5 pt-2">
              {[
                { name: 'Định vị trực tuyến', desc: 'Bản đồ theo dõi lộ trình di chuyển', path: '/trackings', color: 'bg-blue-50 text-blue-700' },
                { name: 'Khai báo thiết bị', desc: 'Đăng ký thêm mã thu phát GPS mới', path: '/iot-devices', color: 'bg-indigo-50 text-indigo-700' },
                { name: 'Lập lịch thuê xe', desc: 'Bàn giao chìa khóa cho khách thuê', path: '/rentals', color: 'bg-emerald-50 text-emerald-700' },
              ].map((link, idx) => (
                <Link 
                  key={idx} 
                  to={link.path}
                  className="flex items-center justify-between p-3.5 border border-slate-50 hover:border-slate-100 rounded-xl hover:bg-slate-50/50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-8 w-8 rounded-lg ${link.color} flex items-center justify-center font-bold text-xs shrink-0`}>
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{link.name}</p>
                      <p className="text-[11px] text-slate-400">{link.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50 mt-6 text-xs text-slate-400 leading-relaxed">
            Mọi thắc mắc kỹ thuật vận hành hoặc kết nối tín hiệu thu phát MQTT kém, vui lòng liên hệ bộ phận Kỹ thuật hệ thống qua hotline nội bộ.
          </div>
        </div>
      </div>
    </div>
  );
}