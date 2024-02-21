import jwt from 'jsonwebtoken';

const authCheck = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            res.status(401).json({messege: "Пользлователь не авторизован"});
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next()
    }catch(err){
        res.status(401).json({messege: "Пользлователь не авторизован"})
    }
}

export default authCheck;
