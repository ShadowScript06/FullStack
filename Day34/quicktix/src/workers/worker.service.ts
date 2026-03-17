import mongoose from "mongoose";
import Booking from "../model/booking.model";
import { Event } from "../model/event.model";
import {
  getGeneralRedisClient,
  getQueueRedisClient,
  getPubRedisClient,
} from "../config/redis";

interface BookingData {
  userId: string;
  eventId: string;
  numberOfTickets: number;
  status: string;
}

export async function startBookingWorker() {
  const queueRedisClient = await getQueueRedisClient();
  const generalRedisClient = await getGeneralRedisClient();
  const pubRedisClient = await getPubRedisClient();

  console.log("Booking Worker Started");

  while (true) {
    let bookingStr: string | null = null;

    try {
      // 1️⃣ Pull booking from queue
      const result = await queueRedisClient.blPop("booking_queue", 0);
      bookingStr = result?.element || null;
      if (!bookingStr) continue;

      // 2️⃣ Parse booking
      let bookingData: BookingData;
      try {
        bookingData = JSON.parse(bookingStr);
      } catch (err) {
        console.error("Failed to parse booking:", bookingStr, err);
        continue;
      }

      const { userId, eventId, numberOfTickets } = bookingData;
      const ticketsKey = `ticketsLeft:${eventId}`;

      // 3️⃣ Ensure Redis key exists
      const exists = await generalRedisClient.exists(ticketsKey);
      if (!exists) {
        const event = await Event.findById(eventId);
        if (!event) {
          console.error(`Event not found: ${eventId}`);
          continue;
        }
        await generalRedisClient.set(ticketsKey, event.totalTickets);
      }

      // 4️⃣ Atomically decrement tickets
      const newTicketsLeft = await generalRedisClient.decrBy(ticketsKey, numberOfTickets);

      if (newTicketsLeft < 0) {
        // Not enough tickets, revert decrement
        await generalRedisClient.incrBy(ticketsKey, numberOfTickets);
        console.log(`Not enough tickets for event ${eventId} (user ${userId})`);
        continue;
      }

      // 5️⃣ Save booking to MongoDB
      try {
        console.log(`Saving booking to MongoDB: user=${userId}, event=${eventId}, tickets=${numberOfTickets}`);
        const booking = await Booking.create({
          userId,
          eventId,
          numberOfTickets,
          status: "confirmed",
        });
        console.log("Booking saved:", booking._id);
      } catch (dbErr) {
        console.error("MongoDB insert failed, reverting Redis decrement:", dbErr);
        // Revert Redis and retry
        await generalRedisClient.incrBy(ticketsKey, numberOfTickets);
        await queueRedisClient.rPush("booking_queue", bookingStr);
        continue;
      }

      // 6️⃣ Publish ticket update
      try {
        await pubRedisClient.publish(
          `ticket_booked:${eventId}`,
          JSON.stringify({ eventId, ticketsLeft: newTicketsLeft })
        );
        console.log(`Published update for event ${eventId}. Tickets left: ${newTicketsLeft}`);
      } catch (pubErr) {
        console.warn("Failed to publish ticket update:", pubErr);
      }

      console.log(
        `Processed booking for user ${userId}, event ${eventId}. Tickets left: ${newTicketsLeft}`
      );
    } catch (err) {
      console.error("Worker error:", err);
      // Retry by pushing back to queue
      if (bookingStr) {
        try {
          await queueRedisClient.rPush("booking_queue", bookingStr);
          console.log("Booking pushed back to queue for retry.");
        } catch (retryErr) {
          console.error("Failed to retry booking:", retryErr);
        }
      }
    }
  }
}