import type { Request, Response, NextFunction } from "express";
import { email, z } from "zod";
import { sendErrorResponse } from "../utils/sendErrorResponse";

const SignupSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    name: z.string(),
    role: z.string(),
});


export const validateSignup = (req: Request, res: Response, next: NextFunction) => {
    const result = SignupSchema.safeParse(req.body);

    if (!result.success) {
        return sendErrorResponse(res);
    }

    next();
};