import apiClient from '../lib/axios';
import type { ApiResponse } from './api';

export interface Maintenance {
  id: number;
  vehicleId: number;
  title?: string;
  status?: string;
}

export const getMaintenances = (): Promise<ApiResponse<Maintenance[]>> => {
  return apiClient.get('/maintenances');
};

export const getMaintenance = (id: number): Promise<ApiResponse<Maintenance>> => {
  return apiClient.get(`/maintenances/${id}`);
};
