import apiClient from '../lib/axios';
import type { ApiResponse } from './api';

export interface Vehicle {
  vehicleId: number;
  plateNumber: string;
  vehicleName?: string;
  vehicleType?: string;
}

export const getVehicles = (): Promise<ApiResponse<Vehicle[]>> => {
  // `apiClient` đã có baseURL, chỉ đưa path tương đối.
  return apiClient.get('/vehicles');
};

export const getVehicle = (id: number): Promise<ApiResponse<Vehicle>> => {
  return apiClient.get(`/vehicles/${id}`);
};

export const createVehicle = (payload: Partial<Vehicle>): Promise<ApiResponse<Vehicle>> => {
  return apiClient.post('/vehicles', payload);
};

export const updateVehicle = (id: number, payload: Partial<Vehicle>): Promise<ApiResponse<Vehicle>> => {
  return apiClient.put(`/vehicles/${id}`, payload);
};

export const deleteVehicle = (id: number): Promise<ApiResponse<null>> => {
  return apiClient.delete(`/vehicles/${id}`);
};
