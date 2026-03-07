const express=require("express");
const cors=require("cors");
const morgan=require("morgan");
const cookieParser = require("cookie-parser");
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');






const errorHandler=require("./middlewares/errorhandler");
const authRouter=require('./routes/auth.routes');
const sessionRouter=require('./routes/session.routes');



const app=express();

app.use(express.json());
app.use(cors({
  origin: "https://flow-pilot-theta.vercel.app", // your frontend domain
  credentials: true // allow cookies
}));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
// Adds default security headers
app.use(helmet());







app.use("/auth",authRouter);
app.use("/session",sessionRouter);

app.get("/api/health", (request,response)=>{
    response.json({
        status:"OK"
    });
})


app.use(errorHandler);

module.exports=app;