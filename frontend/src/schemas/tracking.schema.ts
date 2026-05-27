import { z } from 'zod';

export const trackingHistoryFilterSchema = z.object({
  vehicleId: z.string().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
});

export const trackingAlertsFilterSchema = z.object({
  vehicleId: z.string().optional(),
  alertType: z.enum(['accident', 'impact', 'out_of_zone']).optional(),
  isResolved: z.enum(['true', 'false']).optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
});

export type TrackingHistoryFilterValues = z.infer<typeof trackingHistoryFilterSchema>;
export type TrackingAlertsFilterValues = z.infer<typeof trackingAlertsFilterSchema>;
