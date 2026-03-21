
import express from "express";
import {prisma} from "./prisma/client"
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
// Route to get all users
app.get("/users", async (req, res) => {
 const users = await prisma.user.findMany();
 res.json(users);
});
// Route to create a user
app.post("/users", async (req, res) => {
 const { name, email } = req.body;
 try {
 const user = await prisma.user.create({ data: { name, email } });
 res.status(201).json(user);
 } catch (err: any) {
 res.status(400).json({ error: err.message });
 }
});
export default app;