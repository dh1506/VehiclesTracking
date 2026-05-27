import axios from 'axios';
import { env } from '../config/env.config';
import { useAuthStore } from '../stores/auth.store';
import { toast } from 'sonner';

const apiClient = axios.create({
  baseURL: env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Xử lý lỗi 401 Unauthorized (Token hết hạn hoặc không hợp lệ)
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = '/login';
      toast.error('Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại.');
    }

    // Xử lý lỗi từ backend gửi về (theo format chuẩn của AppError)
    const backendError = error.response?.data;
    if (backendError && !backendError.success) {
      return Promise.reject(backendError);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
