import jwt from 'jsonwebtoken';
import userModell from '../models/User.js'

const adminCheck = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
        res.status(401).json({messege: "Нет авторизован"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;

        const check = await userModell.findById({_id: req.user.id});
        if(check.role !== "admin"){
            res.status(401).json({messege: "Нет доступа"})
        }
        next()

    }catch(err){
        res.status(401).json({messege: "Нет доступа"})
    }
}

export default adminCheck;