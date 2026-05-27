import { z } from 'zod';

export const geofenceSchema = z.object({
  zoneName: z.string().min(1, 'Tên vùng là bắt buộc'),
  description: z.string().optional(),
  latitude: z.coerce.number().min(-90, 'Vĩ độ không hợp lệ').max(90, 'Vĩ độ không hợp lệ'),
  longitude: z.coerce.number().min(-180, 'Kinh độ không hợp lệ').max(180, 'Kinh độ không hợp lệ'),
  radiusMeters: z.coerce.number().positive('Bán kính phải lớn hơn 0'),
  isActive: z.boolean().optional(),
});

export type GeofenceFormValues = z.infer<typeof geofenceSchema>;
