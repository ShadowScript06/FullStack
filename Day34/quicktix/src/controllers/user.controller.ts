import userServices from "../services/user.services";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
const dotenv = require("dotenv");
dotenv.config();
import bcrypt from "bcrypt";
const JWT_SECRET = process.env.JWT_SECRET;

async function createUser(request: Request, response: Response) {
  try {
    const { name, email, password } = request.body;

    const existingUser = await userServices.getExistingUser(email);

    if (existingUser) {
      return response.status(409).json({ error: "User already Exists" });
    }

    const newUser = await userServices.createUser(name, email, password);

    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    response.status(201).json({ message: "user created,", token });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server error" });
  }
}

async function loginUser(request: Request, response: Response) {
  try {
    const { email, password } = request.body;

    const existingUser = await userServices.getExistingUser(email);

    if (!existingUser) {
      return response.status(404).json({ error: "User does not Exists" });
    }

    //@ts-ignore
    const isMatch =await   bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return response.status(403).json({
        message: "Incorrect credentials.",
      });
    }

    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    //@ts-ignore
    const token = jwt.sign({ id: existingUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    response.status(200).json({ message: "user logged in,", token });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server error" });
  }
}

async function getUsers(request: Request, response: Response) {
  try {
    const users = await userServices.getUsers();

    response.status(200).json(users);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server error" });
  }
}

async function getUserById(request: Request, response: Response) {
  try {
    const userId = request.params.userId as string;

    const user = await userServices.getUserbyId(userId);

    if (!user) {
      return response.status(404).json({
        message: "User does not found",
      });
    }

    response.status(200).json(user);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server error" });
  }
}


const userController={
    createUser,
    loginUser,
    getUsers,
    getUserById
}

export default userController;