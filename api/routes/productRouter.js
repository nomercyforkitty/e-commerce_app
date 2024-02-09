import { Router } from 'express';

import productController from '../controllers/productController.js';
import adminCheck from '../middleware/checkRoleMiddleware.js';

const product = new Router();

product.post('/', adminCheck,productController.create);
product.get('/', productController.getAll);
product.get('/:id', productController.getOne);
product.delete('/:id', adminCheck,productController.destroy);
product.patch('/:id', adminCheck,productController.update);


export default product;