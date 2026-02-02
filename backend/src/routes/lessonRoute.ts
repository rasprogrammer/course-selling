import express from "express"; 
import { createLesson } from "../controllers/lessonController";
import { authMiddleware } from "../middlewares/authMiddlewre";
import { permissionChecker } from "../middlewares/permissionChecker";

const router = express.Router();

router.get('/', authMiddleware, permissionChecker(['INSTRUCTOR', 'ADMIN']), createLesson);

export default router;