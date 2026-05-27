import { Router } from 'express';
import * as iotDeviceController from '../controllers/iot-device.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import { createIotDeviceSchema, updateIotDeviceSchema } from '../schemas/iot-device.schema.js';

const router = Router();

router.use(authenticate);

router.get('/', authorize('Admin', 'Technician', 'Staff'), iotDeviceController.getAllIotDevices);
router.get('/:id', authorize('Admin', 'Technician'), iotDeviceController.getIotDeviceById);

router.post(
  '/',
  authorize('Admin', 'Technician'),
  validate(createIotDeviceSchema),
  iotDeviceController.createIotDevice
);

router.put(
  '/:id',
  authorize('Admin', 'Technician'),
  validate(updateIotDeviceSchema),
  iotDeviceController.updateIotDevice
);

router.delete(
  '/:id',
  authorize('Admin'),
  iotDeviceController.deleteIotDevice
);

export default router;
