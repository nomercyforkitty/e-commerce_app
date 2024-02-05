import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    email: {
        type: String, 
        reqired: true,
        unique: true        
    },
    password:{
        type: String,
        reqired: true
    },
    role: {
        type: String,
    }
},{
    timestamps: true
});

export default mongoose.model('User', UserShema);