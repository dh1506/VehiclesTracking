// src/services/tracking.service.ts
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

  // CHUẨN HÓA SANG ISO STRING GỬI LÊN BACKEND
  if (filters?.startTime && filters.startTime !== "") {
    const parsedDate = new Date(filters.startTime);
    if (!isNaN(parsedDate.getTime())) {
      params.startTime = parsedDate.toISOString(); // Chuyển đổi thành dạng: YYYY-MM-DDTHH:mm:ss.sssZ
    }
  }

  if (filters?.endTime && filters.endTime !== "") {
    const parsedDate = new Date(filters.endTime);
    if (!isNaN(parsedDate.getTime())) {
      params.endTime = parsedDate.toISOString(); // Chuyển đổi thành dạng: YYYY-MM-DDTHH:mm:ss.sssZ
    }
  }

  return apiClient.get('/tracking/history', { params });
};

export const getAlerts = (filters?: TrackingAlertsFilters): Promise<ApiResponse<TrackingAlertItem[]>> => {
  const params: any = {};
  if (filters?.vehicleId) params.vehicleId = filters.vehicleId;
  if (filters?.alertType) params.alertType = filters.alertType;
  if (filters?.isResolved !== undefined) params.isResolved = String(filters.isResolved);

  // CHUẨN HÓA SANG ISO STRING GỬI LÊN BACKEND
  if (filters?.startTime && filters.startTime !== "") {
    const parsedDate = new Date(filters.startTime);
    if (!isNaN(parsedDate.getTime())) {
      params.startTime = parsedDate.toISOString(); // Chuyển đổi thành dạng: YYYY-MM-DDTHH:mm:ss.sssZ
    }
  }

  if (filters?.endTime && filters.endTime !== "") {
    const parsedDate = new Date(filters.endTime);
    if (!isNaN(parsedDate.getTime())) {
      params.endTime = parsedDate.toISOString(); // Chuyển đổi thành dạng: YYYY-MM-DDTHH:mm:ss.sssZ
    }
  }

  return apiClient.get('/tracking/alerts', { params });
};

export const resolveAlert = (id: number, payload?: { notes?: string }): Promise<ApiResponse<TrackingAlertItem>> => {
  return apiClient.put(`/tracking/alerts/${id}/resolve`, payload || {});
};