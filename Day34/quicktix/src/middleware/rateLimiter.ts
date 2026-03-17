import { Request, Response, NextFunction } from "express";
import { getRateRedisClient } from "../config/redis";
const dotenv = require("dotenv");
dotenv.config();

const LIMIT = 5;
const WINDOW = 10000;

export async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    const rateClient = await getRateRedisClient();
    const ip = request.ip;
    const key = `rate_limit:${ip}`;

    const now = Date.now();
    const windowStart = now - WINDOW;

    // remove old request before the windowstart time in an array
    await rateClient.zRemRangeByScore(key, 0, windowStart);

    // count current request
    const count = await rateClient.zCard(key);

    if (count >= LIMIT) {
      return response.status(429).json({
        message: "Too many request try again later.",
      });
    }

    const uniqueId = `${now}-${Math.random()}`;

    await rateClient.zAdd(key, {
      score: now,
      value: uniqueId,
    });

    // 5. Set expiry
    await rateClient.expire(key, Math.ceil(WINDOW / 1000));

    next();
  } catch (error) {
    console.log("Rate limitor error", error);
    next();
  }
}
