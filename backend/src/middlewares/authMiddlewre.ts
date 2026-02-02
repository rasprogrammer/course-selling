import type { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import type { RoleType } from "../configTypes";


interface UserPayload {
    userId: string;
    role: RoleType;
}

export interface CustomRequest extends Request {
    userPayload?: UserPayload
}

export const authMiddleware = async (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({
            error: "Access denied"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
        req.userPayload = decoded;

        next();
    } catch (error) {
        return res.status(400).json({
            error: "Invalid token"
        });
    }
};