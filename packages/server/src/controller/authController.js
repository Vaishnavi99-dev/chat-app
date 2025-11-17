import { User } from "../models/User.js";
import { registerSchema , loginSchema} from "../schema/authSchema.js";

const registerUser = async (req, res) => {
    try {
        const { username, name, password } = req.body;

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({
                status: "FAILURE",
                message: "Username already exist try another.",
                data: null
            });

        }

        const user = new User({
            username,
            password,
            name
        });

        const newUser = await user.save();

        res.status(200).json({
            status: "SUCCESS",
            message: "User Created.",
            data: newUser._id.toString()
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "FAILURE",
            message: "Internal server error.",
            data: null
        });
    }
}

const loginUser = async (req, res) => {

    try {
        console.log("Controller Login User Called", req.body);

        const { username, password } = req.body;
    
        const existingUser = await User.findOne({ username });
    
        if (!existingUser || password !== existingUser.password) {
            return res.status(404).json({
                status: "FAILURE",
                message: "Either the password or the username is incorrect.",
                data: null
            });
        }
    
        res.status(200).json({
            status: "SUCCESS",
            message: "User Login Succesfully.",
            data: existingUser._id.toString()
        });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "FAILURE",
            message: "Internal server error.",
            data: null
        });
    }
}

export default {
    registerUser,
    loginUser
}