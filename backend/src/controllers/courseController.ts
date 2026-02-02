import type { Request, Response } from "express";
import type { CustomRequest } from "../middlewares/authMiddlewre";
import { prisma } from "../../db";

export const createCourse = async (req: CustomRequest, res: Response) => {
    try {
        const { title, description, price } = req.body;
        const { userId } = req.userPayload!;

        const course = await prisma.course.create({
            data: {
                title,
                description,
                price,
                instructorId: userId
            }
        });
        
        if (course) {
            return res.status(200).json({
                id: course.id
            });
        }
    } catch (error) {
        return res.status(500).json({
            error: "Create course failed"
        });
    }
};

export const getAllCourse = async (req: Request, res: Response) => {
    try {
        const courses = await prisma.course.findMany();
        return res.status(200).json(courses);
    } catch (error) {
        return res.status(500).json({
            error: `Could not find courses. Error ${error}`
        });
    }
};

export const getCourse = async (req: Request, res: Response) => {
    try {
        const courseId = req.params.id && (req.params.id as string);
        const course = await prisma.course.findUnique({
            where: { id: courseId },
            include: {
                lessons: true
            }
        });

        if (!course) {
            return res.status(404).json({
                error: `Course doesn't exist`
            });
        }

        return res.status(200).json({
            id: course.id,
            title: course.title
        });
    } catch (error) {
        return res.status(500).json({
            error: `Could not find course with lessons. Error ${error}`
        });
    }
};

export const editCourse = async (req: CustomRequest, res: Response) => {
    try {
        const { userId } = req.userPayload!;
        const { title, description, price } = req.body;
        const courseId = req.params.id && (req.params.id) as string;
        const course = await prisma.course.findUnique({
            where: {
                id: courseId
            }
        });

        if (!course) {
            return res.status(404).json({ error: `Course doesn't exist` });
        }

        if (course.instructorId !== userId) {
            return res.status(404).json({ error: `You are not instructor of this course`});
        }

        const updateCourse = await prisma.course.update({
            where: {
                id: courseId
            },
            data: {
                title,
                description, 
                price
            },
        });

        return res.status(200).json(updateCourse);
    } catch (error) {
        return res.status(500).json({
            error: `Course edit failed. Error ${error}`
        });
    }
};

export const deleteCourse = async (req: CustomRequest, res: Response) => {
    try {
        const { userId } = req.userPayload!;
        const courseId = req.params.id && (req.params.id) as string;
        const course = await prisma.course.findUnique({
            where: {
                id: courseId
            }
        });
        
        if (!course) {
            return res.status(404).json({ error: `Course doesn't exist` });
        }
        
        if (course.instructorId !== userId) {
            return res.status(404).json({ error: `You are not instructor of this course`});
        }

        const deletedCourse = await prisma.course.delete({
            where: {
                id: courseId
            }
        });

        return res.status(200).json({
            message: `Course deleted`,
            deletedCourse
        });
    } catch (error) {
        return res.status(500).json({
            error: `Course deletion failed`
        });
    }
};

