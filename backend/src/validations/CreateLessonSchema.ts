import type { Request, Response, NextFunction } from "express";
import { z } from "zod";

const CreateLessonSchema = z.object({
    title: '',
    content: '',
    courseId: ''
});