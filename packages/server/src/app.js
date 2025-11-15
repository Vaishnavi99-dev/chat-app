import express from 'express';
import authRouter from './routes/authRouter.js';

const app = express();
app.use(express.json());// middleware of the express

//creating a auth route
app.use("/api/v1/auth", authRouter);

app.use((_ , res)=>{
    res.status(404).json({status: "FAILURE", message: " No route Found,", data: null });
});

export default app;