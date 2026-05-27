import apiClient from '../lib/axios';
import type { ApiResponse } from './api';

export interface TrackingHistoryItem {
  gpsLogId?: number;
  vehicleId?: number;
  lat?: number;
  lon?: number;
  speed?: number;
  recordedAt?: string;
}

export interface TrackingAlertItem {
  alertId: number;
  vehicleId: number;
  alertType: string;
  isAcknowledged: boolean;
  createdAt?: string;
  vehicle?: {
    plateNumber?: string;
    vehicleName?: string;
  };
}

export interface TrackingHistoryFilters {
  vehicleId?: string | number;
  startTime?: string;
  endTime?: string;
}

export interface TrackingAlertsFilters {
  vehicleId?: string | number;
  alertType?: 'accident' | 'impact' | 'out_of_zone';
  isResolved?: string | boolean;
  startTime?: string;
  endTime?: string;
}

export const getTrackingHistory = (filters?: TrackingHistoryFilters): Promise<ApiResponse<TrackingHistoryItem[]>> => {
  const params: any = {};
  if (filters?.vehicleId) params.vehicleId = filters.vehicleId;
  if (filters?.startTime) params.startTime = filters.startTime;
  if (filters?.endTime) params.endTime = filters.endTime;

  return apiClient.get('/tracking/history', { params });
};

export const getAlerts = (filters?: TrackingAlertsFilters): Promise<ApiResponse<TrackingAlertItem[]>> => {
  const params: any = {};
  if (filters?.vehicleId) params.vehicleId = filters.vehicleId;
  if (filters?.alertType) params.alertType = filters.alertType;
  if (filters?.isResolved !== undefined) params.isResolved = String(filters.isResolved);
  if (filters?.startTime) params.startTime = filters.startTime;
  if (filters?.endTime) params.endTime = filters.endTime;

  return apiClient.get('/tracking/alerts', { params });
};

export const resolveAlert = (id: number, payload?: { notes?: string }): Promise<ApiResponse<TrackingAlertItem>> => {
  return apiClient.put(`/tracking/alerts/${id}/resolve`, payload || {});
};
