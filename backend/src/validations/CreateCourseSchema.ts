import type { Request, Response, NextFunction } from "express";
import { z } from "zod";

const CreateCourseSchema = z.object({
    title: '',
    description: '',
    price: ''
});