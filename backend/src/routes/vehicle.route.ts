import { Router } from 'express';
import * as vehicleController from '../controllers/vehicle.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import { createVehicleSchema, updateVehicleSchema, assignDeviceSchema } from '../schemas/vehicle.schema.js';

const router = Router();

// Áp dụng middleware authenticate cho toàn bộ route
router.use(authenticate);

router.get('/', vehicleController.getAllVehicles);
router.get('/:id', vehicleController.getVehicleById);

// Các thao tác này yêu cầu quyền Admin hoặc Staff
router.post(
  '/',
  authorize('Admin', 'Staff'),
  validate(createVehicleSchema),
  vehicleController.createVehicle
);

router.put(
  '/:id',
  authorize('Admin', 'Staff'),
  validate(updateVehicleSchema),
  vehicleController.updateVehicle
);

router.delete(
  '/:id',
  authorize('Admin'),
  vehicleController.deleteVehicle
);

router.post(
  '/:id/assign-device',
  authorize('Admin', 'Technician'),
  validate(assignDeviceSchema),
  vehicleController.assignDevice
);

router.delete(
  '/:id/unassign-device',
  authorize('Admin', 'Technician'),
  vehicleController.unassignDevice
);

export default router;
