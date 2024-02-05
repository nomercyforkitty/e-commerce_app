// create table product 
import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [{
        _productID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        title: String,
        quantity:{
            type: Number,
            required: true,
            default: 1
        }
    }],
    bill:{
        type: Number,
        required: true,
        default: 0
    }
},{
    timestamps: true
});

export default mongoose.model('Cart', CartSchema);