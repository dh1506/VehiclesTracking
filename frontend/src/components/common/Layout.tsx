import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/auth.store';
import { 
  LayoutDashboard, Car, Users, Navigation, Map, 
  Cpu, KeyRound, Wrench, BarChart3, LogOut, Menu, X, ChevronRight, User,
  UserCheck
} from 'lucide-react';

const navigationItems = [
  { name: 'Tổng quan', path: '/', icon: LayoutDashboard },
  { name: 'Phương tiện', path: '/vehicles', icon: Car },
  { name: 'Người dùng', path: '/users', icon: Users },
  { name: 'Danh bạ Khách hàng', path: '/customers', icon: UserCheck},
  { name: 'Giám sát & Bản đồ', path: '/trackings', icon: Navigation },
  { name: 'Vùng giám sát (Geofence)', path: '/geofences', icon: Map },
  { name: 'Thiết bị IoT', path: '/iot-devices', icon: Cpu },
  { name: 'Hợp đồng thuê xe', path: '/rentals', icon: KeyRound },
  { name: 'Lịch bảo trì', path: '/maintenances', icon: Wrench },
  { name: 'Báo cáo', path: '/reports', icon: BarChart3 },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex font-sans antialiased">
      {/* Sidebar Desktop */}
      <aside className={`bg-slate-900 text-slate-300 border-r border-slate-800 transition-all duration-300 flex flex-col justify-between z-30 fixed lg:static inset-y-0 left-0 ${
        sidebarOpen ? 'w-64 translate-x-0' : 'w-20 translate-x-0 lg:w-20'
      } ${!sidebarOpen ? 'max-lg:-translate-x-full' : 'max-lg:translate-x-0'}`}>
        
        <div>
          {/* Sidebar Header */}
          <div className="h-16 flex items-center justify-between px-5 border-b border-slate-800">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="bg-indigo-600 p-2 rounded-lg text-white shrink-0">
                <Navigation className="h-5 w-5 animate-pulse" />
              </div>
              {sidebarOpen && <span className="font-bold text-white text-base tracking-wider whitespace-nowrap">V-TRACKING</span>}
            </div>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-slate-400 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1.5 overflow-y-auto max-h-[calc(100vh-140px)]">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3.5 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/15' 
                      : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Icon className={`h-5 w-5 shrink-0 transition-transform duration-200 ${!isActive && 'group-hover:scale-110'}`} />
                  {sidebarOpen && <span className="transition-opacity duration-300">{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer User Profile */}
        <div className="p-3 border-t border-slate-800">
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/40">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center text-white shrink-0 font-bold border border-slate-700">
                {user?.fullName?.charAt(0).toUpperCase() || <User className="h-4 w-4" />}
              </div>
              {sidebarOpen && (
                <div className="overflow-hidden leading-tight">
                  <p className="text-sm font-semibold text-white truncate">{user?.fullName}</p>
                  <p className="text-xs text-slate-500 truncate">Hệ thống quản trị</p>
                </div>
              )}
            </div>
            {sidebarOpen && (
              <button onClick={handleLogout} className="text-slate-500 hover:text-red-400 p-1.5 rounded transition-colors" title="Đăng xuất">
                <LogOut className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Header Kính Mờ */}
        <header className="h-16 bg-white/85 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-20 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors">
              <Menu className="h-5 w-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-medium">
              <span>Hệ thống</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-slate-600 capitalize">
                {location.pathname === '/' ? 'Tổng quan' : location.pathname.substring(1)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden md:block">
              <p className="text-sm font-semibold text-slate-800">{user?.fullName}</p>
              <p className="text-[11px] text-slate-400">ID: #{user?.userId}</p>
            </div>
            <div className="h-9 w-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm border border-indigo-100">
              {user?.fullName?.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Nội dung trang */}
        <main className="flex-1 overflow-y-auto max-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}