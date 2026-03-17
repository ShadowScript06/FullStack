// models/Booking.js
import mongoose from "mongoose";

const BookingStatus = ["pending", "confirmed", "failed"];

const BookingSchema = new mongoose.Schema({
  
  userId: { type: String, ref: "User", required: true },
  eventId: { type: String, ref: "Event", required: true },
  numberOfTickets: { type: Number, required: true },
  status: { type: String, enum: BookingStatus, default: "pending" },
}, { timestamps: true });

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;