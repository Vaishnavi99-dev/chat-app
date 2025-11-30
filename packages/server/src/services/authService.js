import { User } from "../models/User.js";

export const authService = {
    async loginUser(data) {
        const { username, password } = data;
        if(!username || !password) {
            throw new Error("Either the password or the username is incorrect.");
        }
        const existingUser = await User.findOne({ username });

        if (!existingUser || password !== existingUser.password) {
            throw new Error("Either the password or the username is incorrect.");
        }
        return existingUser._id.toString();
    },

    async registerUser(data){
        const { username, name , password, avatarUrl}= data;

        if(!username || !name || !password){
            throw new Error ("Either the password , name or username is missing");
        }

        const existingUser = await User.findOne({ username });
        console.log(existingUser);
        
        if(existingUser){
            throw new Error("Username already exist");
        }

        const newUser = await User.create({
            username, 
            name , 
            password,
            avatarUrl
        });

        return newUser._id.toString();
    }
};