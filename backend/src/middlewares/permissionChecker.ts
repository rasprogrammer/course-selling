import type { Request, Response, NextFunction } from "express";
import type { CustomRequest } from "./authMiddlewre";
import type { RoleType } from "../configTypes";


export const permissionChecker = (allowedRoles: RoleType[] = []) => async (req: CustomRequest, res: Response, next: NextFunction) => {
    const { role } = req.userPayload!;
    if (!allowedRoles.includes(role)) {
        return res.status(403).json({ error: 'You have no permission'});
    }
    next();
}