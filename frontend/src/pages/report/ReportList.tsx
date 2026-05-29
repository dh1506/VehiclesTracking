// src/pages/report/ReportList.tsx
import { getDashboardStats, getRentalRevenue } from '../../services/report.service';
import { getAlerts } from '../../services/tracking.service';
import { Button } from '../../components/ui/button';
import { BarChart3, FileSpreadsheet, Download, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';
import { toast } from 'sonner';

// Danh sách các mẫu báo cáo nghiệp vụ định nghĩa trực tiếp trên FE
const REPORT_TEMPLATES = [
  { 
    id: 'fleet_summary', 
    title: 'Báo cáo hiệu suất phi đội xe', 
    desc: 'Thống kê chi tiết số lượng xe khả dụng, số lượng đang cho thuê và trong xưởng bảo trì.',
    icon: BarChart3 
  },
  { 
    id: 'revenue_summary', 
    title: 'Báo cáo doanh thu cho thuê xe', 
    desc: 'Tổng hợp doanh thu tạm tính thực tế của các hợp đồng đang hoạt động trong tháng.',
    icon: TrendingUp 
  },
  { 
    id: 'alerts_log', 
    title: 'Nhật ký sự cố & cảnh báo khẩn cấp', 
    desc: 'Trích xuất toàn bộ lịch sử các vụ va chạm, tai nạn hoặc xe đi lệch khỏi vùng địa giới (Geofence).',
    icon: Cpu 
  }
];

export default function ReportListPage() {

  // Hàm chuyển đổi mảng dữ liệu thành file CSV và tự động kích hoạt tải xuống
  const downloadCSV = (rows: any[][], fileName: string) => {
    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" // thêm BOM để hiển thị tiếng Việt không lỗi font
      + rows.map(e => e.map(val => `"${String(val).replace(/"/g, '""')}"`).join(",")).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${fileName.toLowerCase().replace(/\s/g, '_')}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Hàm xử lý xuất báo cáo động bằng cách gọi trực tiếp API Backend tương ứng
  const handleExportReport = async (reportId: string, title: string) => {
    const toastId = toast.loading(`Đang kết xuất dữ liệu trực tuyến: ${title}...`);
    try {
      if (reportId === 'fleet_summary') {
        // Gọi API /reports/dashboard lấy số liệu thật
        const res = await getDashboardStats();
        const data = res.data;
        const csvRows = [
          ["Chỉ số thống kê", "Số lượng ghi nhận"],
          ["Tổng số phương tiện vận hành", data.totalVehicles],
          ["Tổng số tài khoản người dùng", data.totalUsers],
          ["Tổng số hợp đồng đang hoạt động", data.activeRentals],
          ["Tổng số cảnh báo chưa giải quyết", data.unresolvedAlerts]
        ];
        downloadCSV(csvRows, title);

      } else if (reportId === 'revenue_summary') {
        // Gọi API /reports/revenue lấy doanh thu 30 ngày gần đây
        const now = new Date();
        const past30Days = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        const res = await getRentalRevenue(past30Days.toISOString(), now.toISOString());
        const csvRows = [
          ["Danh mục tài chính", "Giá trị ước tính (VNĐ)"],
          ["Doanh thu cho thuê xe (30 ngày qua)", res.data?.totalRevenue || 0]
        ];
        downloadCSV(csvRows, title);

      } else if (reportId === 'alerts_log') {
        // Gọi API /tracking/alerts lấy danh sách cảnh báo sự cố thật
        const res = await getAlerts({ isResolved: 'false' });
        const csvRows = [
          ["Mã cảnh báo", "Mã xe", "Loại sự cố khẩn cấp", "Ngày phát sinh", "Xử lý"],
          ...(res.data?.map(a => [
            a.alertId,
            a.vehicleId,
            a.alertType,
            a.createdAt ? new Date(a.createdAt).toLocaleString('vi-VN') : '',
            a.isAcknowledged ? "Đã xử lý" : "Chưa xử lý"
          ]) || [])
        ];
        downloadCSV(csvRows, title);
      }

      toast.dismiss(toastId);
      toast.success(`Đã xuất báo cáo "${title}" thành công!`);
    } catch (err: any) {
      toast.dismiss(toastId);
      toast.error(`Không thể trích xuất dữ liệu: ${err?.message || "Lỗi máy chủ hoặc hết hạn phiên làm việc"}`);
    }
  };

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Trung tâm kết xuất báo cáo</h1>
          <p className="text-sm text-slate-500 font-medium">Truy vấn cơ sở dữ liệu và tải báo cáo định dạng bảng tính CSV.</p>
        </div>
      </div>

      {/* Banner phân tích */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-6 rounded-2xl text-white space-y-4 shadow-xl">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/10 rounded-lg text-indigo-400">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="font-bold">Xuất dữ liệu an toàn</h3>
          </div>
          <p className="text-sm text-slate-300">
            Dữ liệu hành trình GPS di chuyển thực tế của các xe được mã hóa bảo mật nghiêm ngặt theo chính sách lưu trữ hệ thống.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-between">
          <div className="space-y-2">
            <h4 className="font-bold text-slate-800">Chuẩn hóa tệp xuất dữ liệu</h4>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Mọi báo cáo tải về đều được mã hóa tiếng Việt có dấu chuẩn UTF-8, hoàn toàn tương thích và hiển thị chính xác trên Microsoft Excel hoặc Google Sheets.
            </p>
          </div>
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-100 shrink-0">
            <ShieldCheck className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Danh sách các Mẫu Báo cáo động */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="p-5 border-b border-slate-50 bg-slate-50/50">
          <h2 className="font-bold text-slate-800 text-base">Danh sách mẫu báo cáo sẵn dùng</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-semibold">
                <th className="p-4 pl-6">Mẫu báo cáo nghiệp vụ</th>
                <th className="p-4">Định dạng hỗ trợ</th>
                <th className="p-4 pr-6 text-right">Xuất dữ liệu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {REPORT_TEMPLATES.map((report) => {
                const Icon = report.icon;
                return (
                  <tr key={report.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-4 pl-6 flex items-center gap-3 max-w-md">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{report.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{report.desc}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-100 font-mono font-bold text-[10px]">
                        <FileSpreadsheet className="h-3.5 w-3.5" /> CSV / UTF-8
                      </span>
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleExportReport(report.id, report.title)}
                        className="h-9 font-bold gap-1 text-indigo-600 border-indigo-100 hover:bg-indigo-50 shadow-sm"
                      >
                        <Download className="h-3.5 w-3.5" /> Kết xuất CSV
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}