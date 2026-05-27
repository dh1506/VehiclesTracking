import { Router } from 'express';
import * as trackingController from '../controllers/tracking.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import { getVehicleTrackingSchema, getVehicleAlertsSchema, resolveAlertSchema } from '../schemas/tracking.schema.js';

const router = Router();

router.use(authenticate);

router.get('/history', validate(getVehicleTrackingSchema), trackingController.getTrackingHistory);
router.get('/alerts', validate(getVehicleAlertsSchema), trackingController.getAlerts);

router.put(
  '/alerts/:id/resolve',
  authorize('Admin', 'Staff'),
  validate(resolveAlertSchema),
  trackingController.resolveAlert
);

export default router;
