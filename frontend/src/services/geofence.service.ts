import apiClient from '../lib/axios';
import type { ApiResponse } from './api';
import type { GeofenceFormValues } from '../schemas/geofence.schema';

export interface Geofence {
  geofenceId: number;
  geofenceName: string;
  centerLat: number;
  centerLon: number;
  radiusMeter: number;
  polygonData?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type CreateGeofenceInput = Omit<GeofenceFormValues, 'isActive'>;
export type UpdateGeofenceInput = Partial<GeofenceFormValues>;

export const getGeofences = (): Promise<ApiResponse<Geofence[]>> => {
  return apiClient.get('/geofences');
};

export const getGeofence = (id: number): Promise<ApiResponse<Geofence>> => {
  return apiClient.get(`/geofences/${id}`);
};

export const createGeofence = (payload: CreateGeofenceInput): Promise<ApiResponse<Geofence>> => {
  return apiClient.post('/geofences', payload);
};

export const updateGeofence = (id: number, payload: UpdateGeofenceInput): Promise<ApiResponse<Geofence>> => {
  return apiClient.put(`/geofences/${id}`, payload);
};

export const deleteGeofence = (id: number): Promise<ApiResponse<null>> => {
  return apiClient.delete(`/geofences/${id}`);
};
