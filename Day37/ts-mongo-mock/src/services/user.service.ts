// src/services/user.service.ts
import { User } from "../models/user.model.js";

export const getUserById = async (id: string) => {
  return await User.findById(id);
};