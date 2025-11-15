import express from 'express';
import authController from '../controller/authController.js';

const authRouter = express.Router();

//path for the register /api/v1/auth/register
authRouter.post("/register", authController.registerUser);

//path for login /api/v1/auth/login
authRouter.post("/login", authController.loginUser);

export default authRouter;