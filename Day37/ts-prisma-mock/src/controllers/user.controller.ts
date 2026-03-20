import { Request, Response } from "express";
import { getUserById } from "../services/user.service";

export const getUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};