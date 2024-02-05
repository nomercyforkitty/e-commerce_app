import { Router } from 'express';

import userController from '../controllers/userController.js';

import authCheck from '../middleware/authMiddleware.js';

const user = new Router();

user.post('/registration', userController.registration);
user.post('/login', userController.login);
user.get('/auth', authCheck, userController.check);


export default user;