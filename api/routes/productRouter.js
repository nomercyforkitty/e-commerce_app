import { Router } from 'express';

import productController from '../controllers/productController.js';


const product = new Router();

product.post('/', productController.create);
product.get('/', productController.getAll);
product.get('/:id', productController.getOne);
product.delete('/:id', productController.destroy);
product.patch('/:id',productController.update);


export default product;