// create table product 
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categorieID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
    img: {
        type: String
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    }
},{
    timestamps: true
});

export default mongoose.model('Product', ProductSchema);