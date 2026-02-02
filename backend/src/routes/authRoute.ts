import express from "express";
import { loginController, signupController } from "../controllers/authController";
import { validateSignup } from "../validations/signupSchema";
import { validateLogin } from "../validations/loginSchema";

const router = express.Router();

router.post('/signup', validateSignup, signupController);
router.post('/login', validateLogin, loginController);

export default router;