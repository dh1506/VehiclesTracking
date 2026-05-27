import apiClient from '../lib/axios';
import type { ApiResponse } from './api';

export interface IotDevice {
  deviceId: number;
  serialNumber: string;
  mqttTopic?: string;
  simNumber?: string;
  active?: boolean;
}

export interface CreateDeviceInput {
  serialNumber: string;
  mqttTopic?: string;
  simNumber?: string;
}

export interface UpdateDeviceInput {
  serialNumber?: string;
  mqttTopic?: string;
  simNumber?: string;
  active?: boolean;
}

export const getDevices = (): Promise<ApiResponse<IotDevice[]>> => {
  return apiClient.get('/iot-devices');
};

export const getDevice = (id: number): Promise<ApiResponse<IotDevice>> => {
  return apiClient.get(`/iot-devices/${id}`);
};

export const createDevice = (payload: CreateDeviceInput): Promise<ApiResponse<IotDevice>> => {
  return apiClient.post('/iot-devices', payload);
};

export const updateDevice = (id: number, payload: UpdateDeviceInput): Promise<ApiResponse<IotDevice>> => {
  return apiClient.put(`/iot-devices/${id}`, payload);
};

export const deleteDevice = (id: number): Promise<ApiResponse<null>> => {
  return apiClient.delete(`/iot-devices/${id}`);
};
