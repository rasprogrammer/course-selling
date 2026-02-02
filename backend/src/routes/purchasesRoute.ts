import express from "express";
import { authMiddleware } from "../middlewares/authMiddlewre";
import { permissionChecker } from "../middlewares/permissionChecker";
import { purchaseCourse } from "../controllers/purchaseController";

const router = express.Router();

router.post('/', authMiddleware, permissionChecker(['STUDENT']), purchaseCourse);

export default router;