import type { Request, Response, NextFunction} from "express";
import type { CustomRequest } from "../middlewares/authMiddlewre";
import { prisma } from "../../db";

export const purchaseCourse = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.userPayload!;
        const { courseId } = req.body;

        const course = await prisma.course.findUnique({
            where: {
                id: courseId
            }
        });
        
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        const purchase = await prisma.purchase.create({
            data: {
                userId,
                courseId
            }
        });

        return res.status(201).json({
            message: 'Course purchase successfully',
            purchase
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Course purchase failed'
        });
    }
};


export const getAllPurchases = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.userPayload!;
        const purchases = await prisma.purchase.findMany({
            where: {
                userId
            }
        });

        return res.status(200).json({
            purchases
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Get all purchases failed'
        });
    }
}