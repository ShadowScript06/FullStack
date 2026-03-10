import { Request, Response } from "express";
import { pool } from "../db/connection";

export const createUser = async (request: Request, response: Response) => {
  const { email } = request.body;

  

  const existingUser = await pool.query(
    `SELECT * FROM users
        WHERE email= $1`,
    [email],
  );

  if (existingUser.rows.length > 0) {
    return response.json("User already exist");
  }

  const newUser = await pool.query(
    `INSERT INTO users (email)
        VALUES ($1)
         RETURNING *`,
    [email],
  );

  response.json(newUser.rows[0]);
};
