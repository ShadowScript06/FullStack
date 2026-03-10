import { Request, Response } from "express";


import {pool} from "../db/connection";

export const createTask =async (request:Request, response:Response)=>{
    const {title,user_id}=request.body;

    const result=await pool.query(
        "INSERT INTO tasks (title,user_id) values ($1,$2) RETURNING *",[title,user_id]
    );

    response.json(result.rows[0]);
}

export const getTasks=async(request:Request,response:Response)=>{
    const result=await pool.query(
        `SELECT tasks.*, users.email
        FROM tasks
        JOIN users on tasks.user_id =users.id`
    );

    response.json(result.rows);
}