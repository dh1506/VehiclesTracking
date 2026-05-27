import { Router } from 'express';
import * as reportController from '../controllers/report.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authenticate);
router.use(authorize('Admin', 'Staff'));

router.get('/dashboard', reportController.getDashboardStats);
router.get('/revenue', reportController.getRentalRevenue);

export default router;
