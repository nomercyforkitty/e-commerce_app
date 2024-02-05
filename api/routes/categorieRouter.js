import { Router } from 'express';

import categorieController from '../controllers/categorieController.js';
import adminCheck from '../middleware/checkRoleMiddleware.js';

const categorie = new Router();

categorie.post('/',adminCheck,categorieController.create);
categorie.get('/', categorieController.getAll);
categorie.delete('/:id', categorieController.destroy);
categorie.patch('/:id', categorieController.update);


export default categorie;