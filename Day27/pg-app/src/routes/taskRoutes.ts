import express from "express";

const router=express.Router();

import { createTask,getTasks } from "../controllers/taskController";


router.post('/',createTask);
router.get("/",getTasks);

export default router;