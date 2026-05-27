import { Router } from 'express';
import * as rentalController from '../controllers/rental.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import { createRentalSchema, updateRentalSchema } from '../schemas/rental.schema.js';

const router = Router();

router.use(authenticate);

router.get('/', authorize('Admin', 'Staff'), rentalController.getAllRentals);
router.get('/:id', authorize('Admin', 'Staff'), rentalController.getRentalById);

router.post(
  '/',
  authorize('Admin', 'Staff'),
  validate(createRentalSchema),
  rentalController.createRental
);

router.put(
  '/:id',
  authorize('Admin', 'Staff'),
  validate(updateRentalSchema),
  rentalController.updateRental
);

export default router;
