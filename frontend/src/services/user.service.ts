import apiClient from '../lib/axios';
import type { ApiResponse } from './api';

export interface User {
  userId: number;
  fullName: string;
  email: string;
  phone?: string;
  roleId: number;
}

export interface CreateUserInput {
  fullName: string;
  email: string;
  password: string;
  phone?: string;
  roleId: number;
}

export interface UpdateUserInput {
  fullName?: string;
  email?: string;
  password?: string;
  phone?: string;
  roleId?: number;
}

export const getUsers = (): Promise<ApiResponse<User[]>> => {
  return apiClient.get('/users');
};

export const getUser = (id: number): Promise<ApiResponse<User>> => {
  return apiClient.get(`/users/${id}`);
};

export const createUser = (payload: CreateUserInput): Promise<ApiResponse<User>> => {
  return apiClient.post('/users', payload);
};

export const updateUser = (id: number, payload: UpdateUserInput): Promise<ApiResponse<User>> => {
  return apiClient.put(`/users/${id}`, payload);
};

export const deleteUser = (id: number): Promise<ApiResponse<null>> => {
  return apiClient.delete(`/users/${id}`);
};
