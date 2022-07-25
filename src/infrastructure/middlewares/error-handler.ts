import { NextFunction, Request, Response } from "express"

export function errorHandler (err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(400).json({
        code: 400,
        message: err.message
    })
}
