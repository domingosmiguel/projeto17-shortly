import { Router } from 'express';
import { getTop10 } from '../controllers/rankingControllers.js';

const router = Router();

router.get('/ranking', getTop10);

export default router;
