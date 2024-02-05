import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import apiError from "../error/apiError.js";

import userModell from "../models/User.js";
import cartModell from "../models/Cart.js";

const jwtGeneration = (id, email, role) =>{
    return jwt.sign({id ,email, role}, 
                    process.env.JWT_KEY,
                    {expiresIn: '24h'})
}

class userController{

    async registration(req, res){
        const {email, password, role} = req.body;

        if(!email || !password){
            return next(apiError.badRequest("Некоректный email или password"));
        }

        const candidate = await userModell.findOne({email});
        if (candidate) {
            return next(apiError.badRequest("Пользователь с таким email уже существует"));
        }

        const hash = await bcrypt.hash(password, 5);
        const user = await userModell.create({email, role, password: hash});
        const cart = await cartModell.create({userID: user.id});
        const token = jwtGeneration(user.id, user.email, user.role);

        res.json({token});
    }

    async login(req, res, next){
        const {email, password} = req.body
        const user = await userModell.findOne({email});

        if(!user){
            return next(apiError.internal("Пользователь не найден"));
        }

        let curentPassword = bcrypt.compareSync(password, user.password);

        if(!curentPassword){
            return next(apiError.internal("Неверны почта или пароль"));
        }

        const token = jwtGeneration(user.id, user.email, user.role);
        return res.json({token})
    }

    async check(req, res){
        const token = jwtGeneration(req.user.id, req.user.email, req.user.role);

        return res.json({token})
    }
}

export default new userController();