import { authService } from "../services/authService.js";

const registerUser = async (req, res) => {
    try {
        const userId = await authService.registerUser(req.validated.body);

        res.status(200).json({
            status: "SUCCESS",
            message: "User Created.",
            data: userId
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "FAILURE",
            message: error.message ?? "Internal server error.",
            data: null
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const userId = await authService.loginUser(req.validated.body);
        res.status(200).json({
            status: "SUCCESS",
            message: "User Login Successfully.",
            data: userId
        });
    } catch (error) {
        // console.log(error);
        res.status(500).json({
            status: "FAILURE",
            message: error.message ?? "Internal server error.",
            data: null
        });
    }
}

export default {
    registerUser,
    loginUser
}