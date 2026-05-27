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

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
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
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
