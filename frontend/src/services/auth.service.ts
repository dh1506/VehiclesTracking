import apiClient from '../lib/axios';
import type { ApiResponse } from './api';

export interface LoginInput { email: string; password: string }
export interface LoginResult { user: any; token: string }

export const login = (input: LoginInput): Promise<ApiResponse<LoginResult>> => {
  // Không hardcode base URL ở đây. `apiClient` đã có `baseURL` (env.API_URL).
  // Tránh tiền tố `/api` nếu `env.API_URL` đã chứa `/api`.
  return apiClient.post('/auth/login', input);
};

export const me = (): Promise<ApiResponse<any>> => {
  return apiClient.get('/auth/me');
};
