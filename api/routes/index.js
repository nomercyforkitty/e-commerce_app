import { Router } from 'express';

import categorie from './categorieRouter.js';
import user from './userRouter.js';
import product from './productRouter.js';

const router = new Router();

router.use('/categorie',categorie);
router.use('/product', product);
router.use('/user', user);

export default router;