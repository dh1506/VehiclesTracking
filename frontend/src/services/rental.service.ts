import apiClient from '../lib/axios';
import type { ApiResponse } from './api';

export interface Rental {
  id: number;
  vehicleId: number;
  renterName?: string;
  startDate?: string;
  endDate?: string;
}

export const getRentals = (): Promise<ApiResponse<Rental[]>> => {
  return apiClient.get('/rentals');
};

export const getRental = (id: number): Promise<ApiResponse<Rental>> => {
  return apiClient.get(`/rentals/${id}`);
};
