import { Router } from 'express';
import { signIn, signUp } from '../controllers/authControllers.js';
import signInMiddleware from '../middleware/signInMiddleware.js';
import signUpMiddleware from '../middleware/signUpMiddleware.js';

const router = Router();

router.post('/signup', signUpMiddleware, signUp);
router.post('/signin', signInMiddleware, signIn);

export default router;
