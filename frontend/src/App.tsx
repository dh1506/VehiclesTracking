import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/auth.store';
import LoginPage from './pages/auth/Login';
import DashboardPage from './pages/dashboard/Dashboard';
import VehicleListPage from './pages/vehicles/VehicleList';
import CreateVehiclePage from './pages/vehicles/CreateVehicle';
import EditVehiclePage from './pages/vehicles/EditVehicle';
import UserListPage from './pages/users/UserList';
import TrackingListPage from './pages/tracking/TrackingList';
import GeofenceListPage from './pages/geofence/GeofenceList';
import IotDeviceListPage from './pages/iot-device/IotDeviceList';
import MaintenanceListPage from './pages/maintenance/MaintenanceList';
import RentalListPage from './pages/rental/RentalList';
import ReportListPage from './pages/report/ReportList';
import ErrorBoundary from './components/common/ErrorBoundary';
import Layout from './components/common/Layout';
import CustomerListPage from './pages/customers/CustomerList';
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { env } from './config/env.config';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

// Global listener – chạy suốt mọi trang, chỉ kết nối 1 lần
function GlobalAlertListener() {
  const queryClient = useQueryClient();
  const socketRef = useRef<any>(null);

  useEffect(() => {
    if (socketRef.current) return; // tránh kết nối lần 2 do StrictMode
    const socket = io(env.SOCKET_URL, {
      transports: ['websocket', 'polling'],
      reconnectionAttempts: 10,
      reconnectionDelay: 3000,
    });
    socketRef.current = socket;

    socket.on('connect', () => console.log('🔌 [GLOBAL] Socket.IO kết nối – theo dõi Geofence'));

    socket.on('alert:new', (data: any) => {
      const alertType = data?.alert ?? data?.alertType ?? '';
      if (alertType === 'OUT_OF_ZONE' || alertType === 'out_of_zone') {
        const vehicleId = data?.vehicleId;
        const dist = data?.dist ? `${data.dist}m` : 'N/A';
        const zoneName = data?.geofenceName ?? 'vùng giám sát';
        queryClient.invalidateQueries({ queryKey: ['trackingAlerts'] });
        toast.error('🚨 Cảnh báo vượt vùng (Out of Zone)!', {
          description: `Xe ID ${vehicleId} đã ra khỏi "${zoneName}" | Cách tâm: ${dist}`,
          duration: 10000,
          style: { background: '#18080a', border: '1.5px solid #dc2626', color: '#fecaca' },
        });
      }
    });

    return () => { socket.disconnect(); socketRef.current = null; };
  }, [queryClient]);

  return null;
}

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
      <GlobalAlertListener />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<DashboardPage />} />
          <Route path="vehicles" element={<VehicleListPage />} />
          <Route path="vehicles/new" element={<CreateVehiclePage />} />
          <Route path="vehicles/:id/edit" element={<EditVehiclePage />} />
          <Route path="users" element={<UserListPage />} />
          <Route path="trackings" element={<TrackingListPage />} />
          <Route path="geofences" element={<GeofenceListPage />} />
          <Route path="iot-devices" element={<IotDeviceListPage />} />
          <Route path="maintenances" element={<MaintenanceListPage />} />
          <Route path="rentals" element={<RentalListPage />} />
          <Route path="reports" element={<ReportListPage />} />
          <Route path="customers" element={<CustomerListPage />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
