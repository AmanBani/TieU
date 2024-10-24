import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
const app = express();

app.use(express.json({limit: "16kb"}))
app.use(cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true
}))
app.use(cookieParser())


//route import
import userRouter from './routes/user.routes'

app.use("/api/user", userRouter)

export { app }