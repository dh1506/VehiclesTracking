import { Router } from 'express';
import * as geofenceController from '../controllers/geofence.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import { createGeofenceSchema, updateGeofenceSchema } from '../schemas/geofence.schema.js';

const router = Router();

router.use(authenticate);

router.get('/', geofenceController.getAllGeofences);
router.get('/:id', geofenceController.getGeofenceById);

// Thao tác chỉnh sửa yêu cầu quyền Admin hoặc Staff
router.post(
  '/',
  authorize('Admin', 'Staff'),
  validate(createGeofenceSchema),
  geofenceController.createGeofence
);

router.put(
  '/:id',
  authorize('Admin', 'Staff'),
  validate(updateGeofenceSchema),
  geofenceController.updateGeofence
);

router.delete(
  '/:id',
  authorize('Admin', 'Staff'),
  geofenceController.deleteGeofence
);

export default router;
