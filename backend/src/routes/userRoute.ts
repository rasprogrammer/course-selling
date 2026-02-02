import express from "express";
import { authMiddleware } from "../middlewares/authMiddlewre";
import { permissionChecker } from "../middlewares/permissionChecker";
import { getAllPurchases } from "../controllers/purchaseController";

const router = express.Router();

router.get('/:id/purchases', authMiddleware, permissionChecker(['STUDENT']), getAllPurchases);

export default router;