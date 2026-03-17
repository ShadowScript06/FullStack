import mongoose from "mongoose";
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

export async function connectDB() {
  try {
    if (MONGO_URL) {
      await mongoose.connect(MONGO_URL);
      console.log("DB is connected");
    }
  } catch (error) {
    throw error;
  }
}
