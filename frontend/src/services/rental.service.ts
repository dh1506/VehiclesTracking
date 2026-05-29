import apiClient from '../lib/axios';
import type { ApiResponse } from './api';

export interface Rental {
  rentalId: number;
  vehicleId: number;
  customerId: number;
  rentedBy: number;
  startTime: string;
  endTime: string;
  actualEndTime?: string;
  rentalFee: number;
  rentalStatus: 'active' | 'completed' | 'cancelled';
  notes?: string;
  vehicle?: {
    plateNumber: string;
    vehicleName: string;
  };
  customer?: {
    fullName: string;
    phone?: string;
  };
}

export interface CreateRentalInput {
  vehicleId: number;
  customerId: number;
  startTime: string;
  endTime: string;
  rentalFee?: number;
  depositAmount?: number;
  notes?: string;
}

export interface UpdateRentalInput {
  endTime?: string;
  actualEndTime?: string;
  rentalFee?: number;
  depositAmount?: number;
  status?: 'active' | 'completed' | 'cancelled';
  notes?: string;
}

export const getRentals = (filters?: { status?: string; vehicleId?: number; customerId?: number }): Promise<ApiResponse<Rental[]>> => {
  return apiClient.get('/rentals', { params: filters });
};

export const getRental = (id: number): Promise<ApiResponse<Rental>> => {
  return apiClient.get(`/rentals/${id}`);
};

export const createRental = (payload: CreateRentalInput): Promise<ApiResponse<Rental>> => {
  return apiClient.post('/rentals', payload);
};

export const updateRental = (id: number, payload: UpdateRentalInput): Promise<ApiResponse<Rental>> => {
  return apiClient.put(`/rentals/${id}`, payload);
};