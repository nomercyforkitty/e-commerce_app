import mongoose from "mongoose";

const CategorieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

export default mongoose.model('categorie', CategorieSchema);