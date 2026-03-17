import express from "express";
import eventController from "../controllers/event.controller";

const router=express.Router();

router.post("/", eventController.createEvent);
router.get("/", eventController.listEvents);
router.get("/:eventId", eventController.getEvent);


export default router;