import categoriesModel from "../models/Categories.js";
import apiErr from "../error/apiError.js"

class categorieController{
    
    async create(req, res){
        const {title} = req.body
        const type = await categoriesModel.create({title})
        return res.json(type);
    }

    async getAll(req, res){
        const types = await categoriesModel.find();
        return res.json(types)
    }

    async destroy(req, res){
        const typeId = req.params.id

        await categoriesModel.findByIdAndDelete({
            _id: typeId
        }).then(res.json({succes: true}));
    }

    async update(req,  res){
        const typeId = req.params.id

        await categoriesModel.findByIdAndUpdate({
            _id: typeId
        },{
            title: req.body.title
        }).then(res.json({succes: true}));
    }
}

export default new categorieController();