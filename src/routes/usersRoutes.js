import { Router } from 'express';
import { getUserLinks } from '../controllers/usersControllers.js';
import tokenMiddleware from '../middleware/tokenMiddleware.js';

const router = Router();

router.get('/users/me', tokenMiddleware, getUserLinks);

export default router;
