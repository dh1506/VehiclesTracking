import { z } from 'zod';

export const createRentalSchema = z.object({
  body: z.object({
    vehicleId: z.number().int().positive('ID xe là bắt buộc'),
    customerId: z.number().int().positive('ID khách hàng là bắt buộc'),
    startTime: z.string().datetime('Thời gian bắt đầu không hợp lệ'),
    endTime: z.string().datetime('Thời gian kết thúc không hợp lệ'),
    rentalFee: z.number().min(0, 'Phí thuê phải lớn hơn hoặc bằng 0').optional(),
    depositAmount: z.number().min(0, 'Tiền cọc phải lớn hơn hoặc bằng 0').optional(),
    notes: z.string().optional(),
  }),
});

export const updateRentalSchema = z.object({
  body: z.object({
    endTime: z.string().datetime().optional(),
    actualEndTime: z.string().datetime().optional(),
    rentalFee: z.number().min(0).optional(),
    depositAmount: z.number().min(0).optional(),
    status: z.enum(['active', 'completed', 'cancelled']).optional(),
    notes: z.string().optional(),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID không hợp lệ'),
  }),
});

export type CreateRentalInput = z.infer<typeof createRentalSchema>['body'];
export type UpdateRentalInput = z.infer<typeof updateRentalSchema>['body'];
