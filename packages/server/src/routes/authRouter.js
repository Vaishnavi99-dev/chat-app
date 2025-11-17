import express from 'express';
import authController from '../controller/authController.js';
import { reqValidator } from '../middleware/requestValidator.js';
import { loginSchema , registerSchema } from '../schema/authSchema.js';

const authRouter = express.Router();

//path for the register /api/v1/auth/register
authRouter.post("/register", reqValidator(registerSchema) ,authController.registerUser);

//path for login /api/v1/auth/login
authRouter.post("/login", reqValidator(loginSchema) , authController.loginUser);

export default authRouter;