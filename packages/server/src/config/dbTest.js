import {User}  from "../models/User.js";
import { connectDB } from "./db.js";
import dotenv from "dotenv";

const register = async (userName, name, password, avatar=null) => {
    try{
        // Check if user already exists
        const existingUser = await User.findOne({ username: userName });
        if(existingUser) {
            console.log('User already exists with this username.');
            return;
        }

        const newUser = new User({
            username: userName,
            name: name,
            password: password,
            avatarUrl: avatar
        });

        await newUser.save();
        console.log('User registered successfully:', newUser);

    } catch(error) {
        console.error('Error registering user:', error);
    }
}

dotenv.config();
(async () =>{
    await connectDB();
    await register("vaishu_gandi_moti_bhains", "Vaishnavi Sharmu", "securePassword123");
})();
