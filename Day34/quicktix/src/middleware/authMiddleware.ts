// middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload as DefaultJwtPayload } from "jsonwebtoken";
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined");

// Our JWT payload type
interface JwtPayload extends DefaultJwtPayload {
  id: string;
}

// Extend Express Request to include `userId`
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }
    // Use unknown first, then assert type
    const decoded = jwt.verify(token, JWT_SECRET) as unknown;

    if (typeof decoded !== "object" || decoded === null || !("id" in decoded)) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }

    req.userId = (decoded as JwtPayload).id; // safely assign
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
}
