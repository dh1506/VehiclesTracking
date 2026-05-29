import apiClient from '../lib/axios';
import type { ApiResponse } from './api';

export interface Maintenance {
  maintenanceId: number;
  vehicleId: number;
  maintenanceType: string;
  maintenanceDate: string;
  cost?: number;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  description?: string;
  vehicle?: {
    plateNumber: string;
    vehicleName: string;
  };
}

export interface CreateMaintenanceInput {
  vehicleId: number;
  maintenanceType: string;
  scheduledDate?: string;
  cost?: number;
  notes?: string;
}

export interface UpdateMaintenanceInput {
  maintenanceType?: string;
  scheduledDate?: string;
  actualDate?: string;
  cost?: number;
  status?: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  notes?: string;
}

export const getMaintenances = (filters?: { status?: string; vehicleId?: number }): Promise<ApiResponse<Maintenance[]>> => {
  return apiClient.get('/maintenances', { params: filters });
};

export const getMaintenance = (id: number): Promise<ApiResponse<Maintenance>> => {
  return apiClient.get(`/maintenances/${id}`);
};

export const createMaintenance = (payload: CreateMaintenanceInput): Promise<ApiResponse<Maintenance>> => {
  return apiClient.post('/maintenances', payload);
};

export const updateMaintenance = (id: number, payload: UpdateMaintenanceInput): Promise<ApiResponse<Maintenance>> => {
  return apiClient.put(`/maintenances/${id}`, payload);
};

export const deleteMaintenance = (id: number): Promise<ApiResponse<null>> => {
  return apiClient.delete(`/maintenances/${id}`);
};