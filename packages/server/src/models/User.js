import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true,
        unique: true   
    },
    name : {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    avatarUrl:{
        type: String,
        default: null
    }
}, {timestamps: true});

export const User = mongoose.model('User', UserSchema);