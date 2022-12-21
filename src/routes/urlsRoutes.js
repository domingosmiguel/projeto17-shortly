import { Router } from 'express';
import { shorten } from '../controllers/urlsControllers.js';
import tokenMiddleware from '../middleware/tokenMiddleware.js';
import urlMiddleware from '../middleware/urlMiddleware.js';

const router = Router();

router.post('/urls/shorten', tokenMiddleware, urlMiddleware, shorten);
router.get('/urls/:id');
router.get('/urls/open/:shortUrl');
router.delete('/urls/:id');

export default router;
