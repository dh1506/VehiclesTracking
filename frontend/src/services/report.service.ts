// src/services/report.service.ts
import apiClient from '../lib/axios';
import type { ApiResponse } from './api';

export interface DashboardStats {
  totalVehicles: number;
  totalUsers: number;
  activeRentals: number;
  unresolvedAlerts: number;
  vehicleStatusCounts: Array<{
    status: 'available' | 'rented' | 'maintenance';
    _count: { vehicleId: number };
  }>;
}

export interface RevenueStats {
  totalRevenue: number;
}

// 1. API thống kê tổng quan
export const getDashboardStats = (): Promise<ApiResponse<DashboardStats>> => {
  return apiClient.get('/reports/dashboard');
};

// 2. API thống kê doanh thu theo thời gian
export const getRentalRevenue = (startDate: string, endDate: string): Promise<ApiResponse<RevenueStats>> => {
  return apiClient.get('/reports/revenue', { params: { startDate, endDate } });
};