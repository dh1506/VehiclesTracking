import apiClient from '../lib/axios';
import type { ApiResponse } from './api';
import type { CustomerFormValues } from '../schemas/customer.schema';

export interface Customer {
  customerId: number;
  fullName: string;
  phone: string;
  email?: string;
  identityNumber?: string;
  address?: string;
  createdAt?: string;
}

export const getCustomers = (search?: string): Promise<ApiResponse<Customer[]>> => {
  return apiClient.get('/customers', { params: { search } });
};

export const getCustomer = (id: number): Promise<ApiResponse<Customer>> => {
  return apiClient.get(`/customers/${id}`);
};

export const createCustomer = (payload: CustomerFormValues): Promise<ApiResponse<Customer>> => {
  return apiClient.post('/customers', payload);
};

export const updateCustomer = (id: number, payload: CustomerFormValues): Promise<ApiResponse<Customer>> => {
  return apiClient.put(`/customers/${id}`, payload);
};

export const deleteCustomer = (id: number): Promise<ApiResponse<null>> => {
  return apiClient.delete(`/customers/${id}`);
};