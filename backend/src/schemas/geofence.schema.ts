import { z } from 'zod';

export const createGeofenceSchema = z.object({
  body: z.object({
    zoneName: z.string().min(1, 'Tên vùng là bắt buộc'),
    type: z.enum(['circle', 'polygon']),
    description: z.string().optional(),
    latitude: z.number().min(-90).max(90, 'Vĩ độ không hợp lệ'),
    longitude: z.number().min(-180).max(180, 'Kinh độ không hợp lệ'),
    radiusMeters: z.number().positive('Bán kính phải lớn hơn 0'),
  }),
});

export const updateGeofenceSchema = z.object({
  body: z.object({
    zoneName: z.string().optional(),
    description: z.string().optional(),
    latitude: z.number().min(-90).max(90).optional(),
    longitude: z.number().min(-180).max(180).optional(),
    radiusMeters: z.number().positive().optional(),
    isActive: z.boolean().optional(),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID không hợp lệ'),
  }),
});

export type CreateGeofenceInput = z.infer<typeof createGeofenceSchema>['body'];
export type UpdateGeofenceInput = z.infer<typeof updateGeofenceSchema>['body'];
