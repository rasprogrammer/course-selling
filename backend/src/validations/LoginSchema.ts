import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { sendErrorResponse } from "../utils/sendErrorResponse";

const LoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string(),
})

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const result = LoginSchema.safeParse(req.body);

    if (!result.success) {
        return sendErrorResponse(res);
    }

    next();
}