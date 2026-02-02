import type { Request, Response, NextFunction } from "express";
import { z } from "zod";

const createCourseSchema = z.object({
    title: z.string(),
    description: z.string(),
    price: z.int()
});

const purchaseCourseSchema = z.object({
    courseId: z.string().nonempty()
});