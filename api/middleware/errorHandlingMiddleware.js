import apiError from "../error/apiError.js"

const errHandle = (err, req, res, next) => {
    if (err instanceof apiError){
        return res.status(err.status).json({message: err.message});
    }
    return res.status(500).json({message: 'Непредвидинная ошибка'});
}

export default errHandle;