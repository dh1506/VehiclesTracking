import apiClient from '../lib/axios';
import type { ApiResponse } from './api';

export interface Report {
  id: number;
  title?: string;
  createdAt?: string;
}

export const getReports = (): Promise<ApiResponse<Report[]>> => {
  return apiClient.get('/reports');
};

export const getReport = (id: number): Promise<ApiResponse<Report>> => {
  return apiClient.get(`/reports/${id}`);
};
