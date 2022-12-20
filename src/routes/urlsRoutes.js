import { Router } from 'express';
import { shorten } from '../controllers/urlsControllers.js';
import tokenMiddleware from '../middleware/tokenMiddleware.js';

const router = Router();

router.post('/urls/shorten', tokenMiddleware, shorten);
router.get('/urls/:id');
router.get('/urls/open/:shortUrl');
router.delete('/urls/:id');

export default router;
