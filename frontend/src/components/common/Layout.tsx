import { Link, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth.store'

// Layout chung chứa Header và Navigation cơ bản.
export default function Layout() {
  const logout = useAuthStore((s) => s.logout)

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b p-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="font-bold text-lg">Vehicle Tracking</div>
          <nav className="flex flex-wrap gap-3 text-sm">
            <Link className="text-slate-700 hover:text-primary" to="/">Dashboard</Link>
            <Link className="text-slate-700 hover:text-primary" to="/vehicles">Phương tiện</Link>
            <Link className="text-slate-700 hover:text-primary" to="/users">Người dùng</Link>
            <Link className="text-slate-700 hover:text-primary" to="/trackings">Tracking</Link>
            <Link className="text-slate-700 hover:text-primary" to="/geofences">Geofence</Link>
            <Link className="text-slate-700 hover:text-primary" to="/iot-devices">IoT</Link>
            <Link className="text-slate-700 hover:text-primary" to="/rentals">Thuê xe</Link>
            <Link className="text-slate-700 hover:text-primary" to="/maintenances">Bảo trì</Link>
            <Link className="text-slate-700 hover:text-primary" to="/reports">Báo cáo</Link>
          </nav>
          <div>
            <button onClick={() => { logout(); window.location.href = '/login' }} className="text-sm text-red-600">Đăng xuất</button>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
