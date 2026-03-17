import { Request, Response } from "express";
import eventServices from "../services/event.service";

 async function createEvent(request: Request, response: Response) {
  try {
    const { name, totalTickets, date } = request.body;

    const newEvent = await eventServices.createEvent(name, totalTickets, date);

    response.status(201).json(newEvent);
  } catch (error) {
    console.log(error);
    response.status(500).json({
      error: "Failed to create event",
    });
  }
}

 async function listEvents(request: Request, response: Response) {
  try {
    const events = await eventServices.listEvents();

    response.status(200).json(events);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Failed to list event" });
  }
}

 async function getEvent(request: Request, response: Response) {
  try {
    const id = request.params.eventId as string;
    const event = await eventServices.getEvent(id);

    if (!event) {
      response.status(404).json({ error: "Event not found" });
    }

    response.json(event);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Failed to get event" });
  }
}


const eventController={
    createEvent,
    listEvents,
    getEvent
}

export default eventController;