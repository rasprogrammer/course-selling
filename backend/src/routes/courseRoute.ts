import express from "express";
import { createCourse, deleteCourse, editCourse, getAllCourse, getCourse } from "../controllers/courseController";
import { permissionChecker } from "../middlewares/permissionChecker";
import { getAllLessons } from "../controllers/lessonController";
import { authMiddleware } from "../middlewares/authMiddlewre";

const router = express.Router();

router.post('/', authMiddleware,  permissionChecker(["INSTRUCTOR", "ADMIN"]), createCourse);
router.get('/', getAllCourse);
router.get('/:id', authMiddleware, getCourse);
router.patch('/:id', authMiddleware, editCourse);
router.delete('/:id', authMiddleware, deleteCourse);
router.get('/:courseId/lessons', getAllLessons);

export default router;