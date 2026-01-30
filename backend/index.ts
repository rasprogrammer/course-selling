import express, { urlencoded } from "express";
import authRouter from "./src/routes/authRoute";
import { authMiddleware } from "./src/middlewares/authMiddlewre";
import { meController } from "./src/controllers/authController";

const PORT = 3000;

const app = express();

// app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use('/auth', authRouter);
app.get('/me', authMiddleware, meController);

app.listen(PORT, () => console.log('server is starting on port 3000'));