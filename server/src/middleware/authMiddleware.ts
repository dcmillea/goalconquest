import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayLoad {
    id: number;
    email: string;
}

export interface AuthRequest extends Request {
    user?: JwtPayLoad;
}

export const authenticationToken = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) {
        return res.status(401).json({succcess: false, message: "Missing token"});
    }

    jwt.verify(token, process.env.JWT_SECRET || "your_secret_key", (err, user) => {
        if(err) return res.status(403).json({success: false, message: "Invalid toekn"});

        req.user = user as JwtPayLoad;
        next();
    }) 
}