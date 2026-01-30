import type { Response } from "express";

export const sendErrorResponse = (res: Response) => {
    return res.status(400).json({
        "error": "Invalid request",
        "statusCode": 400,
        "timestamp": new Date().toISOString()
    })
}