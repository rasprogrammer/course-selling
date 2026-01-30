import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { prisma } from "../../db";
import type { CustomRequest } from "../middlewares/authMiddlewre";

const saltRounds = 10;

export const signupController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { name, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (existingUser) {
            return res.status(409).json({
                error: "User Already Exists"
            });
        } else {
            const user = await prisma.user.create({
                data : {
                    name: name,
                    email: email,
                    password: hashedPassword,
                    role: role
                },
            });

            if (user) {
                return res.status(200).json({
                    message: `User registration successfull`,
                    user
                });
            }
        }
    } catch (error) {
        return res.status(500).json({ error: `Registration failed. Error ${error}` });
    }
}

export const loginController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { email, password } = req.body;
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            },
        });

        if (!existingUser) {
            return res.status(401).json({
                error: "User not found. Please Signup."
            });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        
        if (!passwordMatch) {
            return res.status(401).json({
                error: "Authentication failed"
            });
        }

        if (!process.env.JWT_SECRET || typeof process.env.JWT_SECRET !== "string") {
            throw new Error("JWT_SECRET environment variable is not set");
        }

        const token = jwt.sign({userId: existingUser.id}, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });

        return res.status(200).json({
            token
        });

    } catch (error) {
        return res.status(500).json({
            error: `Login failed. Error ${error}`
        });
    }
};


export const meController = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.userPayload!;
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if (!user) {
            return res.status(401).json({
                error: "User not found"
            });
        }

        return res.status(200).json({
            email: user.email
        });

    } catch (error) {
        return res.status(500).json({
            error: "Request failed"
        });
    }
}