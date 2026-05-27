import { z } from 'zod';

export const createIotDeviceSchema = z.object({
  body: z.object({
    serialNumber: z.string().min(1, 'Mã thiết bị là bắt buộc'),
    mqttTopic: z.string().min(1, 'Topic MQTT là bắt buộc'),
    simNumber: z.string().optional(),
    firmwareVersion: z.string().optional(),
  }),
});

export const updateIotDeviceSchema = z.object({
  body: z.object({
    serialNumber: z.string().optional(),
    mqttTopic: z.string().optional(),
    simNumber: z.string().optional(),
    firmwareVersion: z.string().optional(),
    status: z.enum(['online', 'offline']).optional(),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID thiết bị không hợp lệ'),
  }),
});

export type CreateIotDeviceInput = z.infer<typeof createIotDeviceSchema>['body'];
export type UpdateIotDeviceInput = z.infer<typeof updateIotDeviceSchema>['body'];
