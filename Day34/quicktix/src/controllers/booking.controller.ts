import { Request, Response } from "express";
import bookingService from "../services/booking.service";


export async function createBookingController(req: Request, res: Response) {
  try {
    const userId = req.userId!;
    const { eventId, numberOfTickets } = req.body;

    const result = await bookingService.createBooking(userId, eventId, numberOfTickets);

    return res.status(200).json(result);
  } catch (err: any) {
    console.error(err);
    return res.status(400).json({ error: err.message });
  }
}