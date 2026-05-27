import { z } from 'zod';

export const getVehicleTrackingSchema = z.object({
  query: z.object({
    vehicleId: z.string().regex(/^\d+$/, 'ID xe không hợp lệ').optional(),
    startTime: z.string().datetime().optional(),
    endTime: z.string().datetime().optional(),
  }),
});

export const getVehicleAlertsSchema = z.object({
  query: z.object({
    vehicleId: z.string().regex(/^\d+$/, 'ID xe không hợp lệ').optional(),
    alertType: z.enum(['accident', 'impact', 'out_of_zone']).optional(),
    isResolved: z.enum(['true', 'false']).optional(),
    startTime: z.string().datetime().optional(),
    endTime: z.string().datetime().optional(),
  }),
});

export const resolveAlertSchema = z.object({
  body: z.object({
    notes: z.string().optional(),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID cảnh báo không hợp lệ'),
  }),
});
