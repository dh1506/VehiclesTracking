import { z } from 'zod';

export const createMaintenanceSchema = z.object({
  body: z.object({
    vehicleId: z.number().int().positive('ID xe là bắt buộc'),
    maintenanceType: z.string().min(1, 'Loại bảo trì là bắt buộc'),
    scheduledDate: z.string().datetime('Ngày dự kiến không hợp lệ').optional(),
    cost: z.number().min(0, 'Chi phí phải lớn hơn 0').optional(),
    notes: z.string().optional(),
  }),
});

export const updateMaintenanceSchema = z.object({
  body: z.object({
    maintenanceType: z.string().optional(),
    scheduledDate: z.string().datetime().optional(),
    actualDate: z.string().datetime().optional(),
    cost: z.number().min(0).optional(),
    status: z.enum(['scheduled', 'in_progress', 'completed', 'cancelled']).optional(),
    notes: z.string().optional(),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID không hợp lệ'),
  }),
});

export type CreateMaintenanceInput = z.infer<typeof createMaintenanceSchema>['body'];
export type UpdateMaintenanceInput = z.infer<typeof updateMaintenanceSchema>['body'];
