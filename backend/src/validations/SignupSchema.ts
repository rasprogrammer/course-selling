import type { Request, Response, NextFunction } from "express";
import { email, z } from "zod";
import { sendErrorResponse } from "../utils/sendErrorResponse";

const signupSchema = z.object({
    name: z.string(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.string(),
});


export const validateSignup = (req: Request, res: Response, next: NextFunction) => {
    const result = signupSchema.safeParse(req.body);

    if (!result.success) {
        return sendErrorResponse(res);
    }

    next();
};