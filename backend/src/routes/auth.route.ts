import { Router } from 'express';
import { loginController, getMeController } from '../controllers/auth.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { loginSchema } from '../schemas/auth.schema.js';

const router = Router();

router.post('/login', validate(loginSchema), loginController);
router.get('/me', authenticate, getMeController);

export default router;
