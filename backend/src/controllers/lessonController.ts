import type { Request, Response, NextFunction } from "express";
import type { CustomRequest } from "../middlewares/authMiddlewre";
import { prisma } from "../../db";

export const createLesson = async (req: CustomRequest, res: Response) => {
    try {
        const { userId } = req.userPayload!;
        const { title, content, courseId } = req.body;

        const course = await prisma.course.findUnique({
            where: {
                id: courseId
            }
        });

        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        if (course.instructorId !== userId) {
            return res.status(404).json({ error: `You are not instructor of this course`});
        }

        const lesson = await prisma.lesson.create({
            data: {
                title: title,
                content: content,
                courseId: courseId
            }
        });

        return res.status(200).json(lesson);

    } catch (error) {
        return res.status(500).json({
            error: 'lesson creation failed'
        });
    }
}

export const getAllLessons = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const courseId = req.params.courseId && (req.params.courseId) as string;
        const course = await prisma.course.findUnique({
            where: {
                id: courseId
            }
        });
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        
        const lessons = await prisma.lesson.findMany({
            where: {
                courseId: courseId
            }
        });

        return res.status(200).json(lessons);
    } catch (error) {
        return res.status(500).json({
            error: 'Get all lessons failed'
        });
    }
    
}