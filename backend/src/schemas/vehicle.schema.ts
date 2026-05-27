import { z } from 'zod';

export const createVehicleSchema = z.object({
  body: z.object({
    plateNumber: z.string().min(1, 'Biển số xe là bắt buộc'),
    vehicleName: z.string().min(1, 'Tên xe là bắt buộc'),
    vehicleType: z.string().min(1, 'Loại xe là bắt buộc'),
    brand: z.string().optional(),
    model: z.string().optional(),
    color: z.string().optional(),
    yearManufactured: z.number().int().optional(),
  }),
});

export const updateVehicleSchema = z.object({
  body: z.object({
    plateNumber: z.string().optional(),
    vehicleName: z.string().optional(),
    vehicleType: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    color: z.string().optional(),
    yearManufactured: z.number().int().optional(),
    status: z.enum(['available', 'rented', 'maintenance']).optional(),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID xe không hợp lệ'),
  }),
});

export const assignDeviceSchema = z.object({
  body: z.object({
    deviceId: z.number().int().positive('ID thiết bị phải là số nguyên dương'),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID xe không hợp lệ'),
  }),
});

export type CreateVehicleInput = z.infer<typeof createVehicleSchema>['body'];
export type UpdateVehicleInput = z.infer<typeof updateVehicleSchema>['body'];
