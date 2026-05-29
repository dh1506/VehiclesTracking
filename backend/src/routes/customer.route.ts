// backend/src/routes/customer.route.ts
import { Router } from 'express';
import * as customerController from '../controllers/customer.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import { createCustomerSchema, updateCustomerSchema } from '../schemas/customer.schema.js';

const router = Router();

router.use(authenticate);
router.use(authorize('Admin', 'Staff'));

router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getCustomerById);
router.post('/', validate(createCustomerSchema), customerController.createCustomer);
router.put('/:id', validate(updateCustomerSchema), customerController.updateCustomer);
router.delete('/:id', authorize('Admin'), customerController.deleteCustomer);

export default router;