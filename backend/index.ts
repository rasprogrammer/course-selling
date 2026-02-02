import express, { urlencoded } from "express";
const PORT = 3000;

const app = express();
app.use(express.json());

import authRouter from "./src/routes/authRoute";
import courseRouter from "./src/routes/courseRoute";
import lessonRouter from "./src/routes/lessonRoute";

import { authMiddleware } from "./src/middlewares/authMiddlewre";
import { meController } from "./src/controllers/authController";


app.use('/auth', authRouter);
app.get('/me', authMiddleware, meController);
app.use('/courses', courseRouter);
app.use('/lessons', lessonRouter);

app.listen(PORT, () => console.log('server is starting on port 3000'));