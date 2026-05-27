import { Router } from 'express';
import * as maintenanceController from '../controllers/maintenance.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import { createMaintenanceSchema, updateMaintenanceSchema } from '../schemas/maintenance.schema.js';

const router = Router();

router.use(authenticate);

router.get('/', authorize('Admin', 'Staff', 'Technician'), maintenanceController.getAllMaintenances);
router.get('/:id', authorize('Admin', 'Staff', 'Technician'), maintenanceController.getMaintenanceById);

router.post(
  '/',
  authorize('Admin', 'Technician'),
  validate(createMaintenanceSchema),
  maintenanceController.createMaintenance
);

router.put(
  '/:id',
  authorize('Admin', 'Technician'),
  validate(updateMaintenanceSchema),
  maintenanceController.updateMaintenance
);

router.delete(
  '/:id',
  authorize('Admin'),
  maintenanceController.deleteMaintenance
);

export default router;
