import { Request, Response, NextFunction } from "express";
import { createClient } from "redis";


export const rateClient=createClient({
    url:"redis://localhost:6379"
});


const WINDOW_SIZE=60;

const MAX_REQUEST=5;

export async function ratelimiter(request:Request, response:Response, next:NextFunction){
    const ip=request.ip;

    const key =`rate:${ip}`;


    const current=await  rateClient.incr(key);

    if(current ===1){
        await rateClient.expire(key,WINDOW_SIZE);
    }

    if(current > MAX_REQUEST){
        return response.status(429).json({mesage:"Too many requests. Try later."});

    }

    next();
}

