import { getGeneralRedisClient, getQueueRedisClient } from "../config/redis";
import Booking from "../model/booking.model";
import { Event } from "../model/event.model";

async function createBooking(
  userId: string,
  eventId: string,
  numberOfTickets: number,
) {
  const generalRedisClient = await getGeneralRedisClient();

  

  const lockKey = `ticket_lock:${eventId}`;

  const ticketsKey = `ticketsLeft:${eventId}`;

  const lockTTL = 5000;

  // Aquire redis lock
  const lockAcquired = await generalRedisClient.set(lockKey, "locked", {
    NX: true, // Only set if not exists
    PX: lockTTL, // Expiration in milliseconds
  });

  if(!lockAcquired){
    throw new Error("Too many requests, try again later");
  }

  try {
    const ticketsLeftStr=await generalRedisClient.get(ticketsKey);

    const ticketsLeft=Number(ticketsLeftStr) || 0;

    await generalRedisClient.decrBy(ticketsKey, numberOfTickets);

    // Push booking to queue for async DB processing
    const bookingData = {
      userId,
      eventId,
      numberOfTickets,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

     await generalRedisClient.rPush("booking_queue", JSON.stringify(bookingData));

     return {message:"Booking processing"};

  } catch (error) {
    console.log(error);
  }finally{
    // realease lock
    await generalRedisClient.del(lockKey);
  }
}


const bookingService={
    createBooking
}

export default  bookingService;