import { Router } from 'express';

import categorieController from '../controllers/categorieController.js';
import adminCheck from '../middleware/checkRoleMiddleware.js';

const categorie = new Router();

categorie.post('/',adminCheck,categorieController.create);
categorie.get('/', categorieController.getAll);
categorie.delete('/:id', adminCheck,categorieController.destroy);
categorie.patch('/:id', adminCheck,categorieController.update);


export default categorie;