import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    avatarUrl: {
        type: String,
        default: null
    }
},{ timestamps: true});

export const User = mongoose.model('User', userSchema);