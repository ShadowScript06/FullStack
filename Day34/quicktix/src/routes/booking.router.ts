import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { createBookingController } from "../controllers/booking.controller";



const router = Router();

// Only authenticated users can book tickets
router.post("/", authMiddleware, createBookingController);

export default router;