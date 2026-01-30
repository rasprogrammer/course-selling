import type { Request, Response, NextFunction } from "express";
import { z } from "zod";

const PurchaseCourseSchema = z.object({
    courseId: ''
});