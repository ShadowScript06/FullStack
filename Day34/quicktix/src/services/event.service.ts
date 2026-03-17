import { getGeneralRedisClient } from "../config/redis";
import { Event } from "../model/event.model";

async function createEvent(name: string, totalTickets: number, date: Date) {
  const newEvent = await Event.create({
    name,
    totalTickets,
    ticketsLeft: totalTickets,
    date,
  });
  const generalRedisClient = await getGeneralRedisClient();

  const ticketsKey = `ticketsLeft:${newEvent._id}`;
  await generalRedisClient.set(ticketsKey, totalTickets);

 
  return newEvent;
}

async function listEvents() {
  const events = await Event.find();

  const generalRedisClient = await getGeneralRedisClient();

  const eventsWithTickets = await Promise.all(
    events.map(async (event) => {
      const ticketsLeft = await generalRedisClient.get(
        `ticketsLeft:${event._id}`,
      );

      return {
        ...event.toObject(),
        ticketsLeft: Number(ticketsLeft) || event.ticketsLeft,
      };
    }),
  );

  return eventsWithTickets;
}

async function getEvent(eventId: string) {
  const event = await Event.findById(eventId);

  if (!event) return null;

  const generalRedisClient = await getGeneralRedisClient();

  const ticketsLeft = await generalRedisClient.get(`ticketsLeft:${eventId}`);

  return {
    ...event.toObject(),
    ticketsLeft: Number(ticketsLeft) || event.ticketsLeft,
  };
}

const eventServices = {
  createEvent,
  getEvent,
  listEvents,
};

export default eventServices;
