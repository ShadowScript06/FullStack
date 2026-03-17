import express, {Request, Response} from "express";
import { rateLimiter } from "./middleware/rateLimiter";


export const app=express();
import eventRouter from "./routes/event.routes";
import userRouter from "./routes/user.routes";
import bookingRouter  from "./routes/booking.router";
import { authMiddleware } from "./middleware/authMiddleware";


app.use(express.json());
app.use(rateLimiter);
app.use("/events",authMiddleware, eventRouter);
app.use("/users", userRouter);
app.use("/book",bookingRouter);




app.get("/healthy", (request:Request,response:Response)=>{
    response.status(200).json({status:"OK"});
})


