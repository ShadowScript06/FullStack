import express from "express";
import taskRoutes from "./routes/taskRoutes";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
dotenv.config();

const app=express();

app.use(express.json());


app.use("/tasks",taskRoutes);
app.use('/user',userRoutes);
const PORT=process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});


