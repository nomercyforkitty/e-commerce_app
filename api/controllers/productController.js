import {v4 as uuid} from "uuid";

import apiError from "../error/apiError.js";
import productModel from "../models/Product.js";

import path from 'path'
import { fileURLToPath } from "url";

class productController{

    async create(req, res, next){
        try{
            const {title, description, categorieID, amount} = req.body
            const {img} = req.files
    
            let fileName = uuid() + ".jpg";
            const filename = fileURLToPath(import.meta.url);

            img.mv(path.resolve(path.dirname(filename),'..','static', fileName))
    
            const product = await productModel.create({
                title, description, categorieID, img: fileName, amount
            })
    
            res.json(product)
        }catch(err){
            next(apiError.badRequest(err.message));
        }

    }

    async getAll(req, res){
        const {categorieID} = req.query;

        let products;

        if(!categorieID){
            products = await productModel.find()
        }
        if(categorieID){
            products = await productModel.find({categorieID})
        }

        res.json(products)
    }

    async destroy(req, res){
        const  productId = req.params.id;

        await productModel.findByIdAndDelete({
            _id: productId
        }).then(res.json({succes: true}))
    }

    async getOne(req, res ){
        const {id} = req.params   
        const product = await productModel.findById(id);

        res.json(product);
    }

    async update(req, res){

    }
}

export default new productController();