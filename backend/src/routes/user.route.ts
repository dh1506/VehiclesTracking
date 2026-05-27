import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import { createUserSchema, updateUserSchema } from '../schemas/user.schema.js';

const router = Router();

// Toàn bộ các thao tác với người dùng yêu cầu quyền Admin
router.use(authenticate);
router.use(authorize('Admin'));

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', validate(createUserSchema), userController.createUser);
router.put('/:id', validate(updateUserSchema), userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
