import { app } from "./app";
import { connectDB } from "./config/db";
import {
  getGeneralRedisClient,
  getPubRedisClient,
  getQueueRedisClient,
  getSubRedisClient,
} from "./config/redis";

import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import { startBookingWorker } from "./workers/worker.service";
const dotenv = require("dotenv");
dotenv.config();


const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // Connect to database
    await connectDB();

    // Connect all Redis clients
    await Promise.all([
      getGeneralRedisClient(),
      getQueueRedisClient(),
      getPubRedisClient(),
      getSubRedisClient(),
    ]);

    console.log("All Redis Clients are connected");


    // subscribe to events channerl
     const subRedisClient = await getSubRedisClient();
    await subRedisClient.pSubscribe("ticket_booked:*", (message, channel) => {
      const eventId = channel.split(":")[1];
      const clients = clientsMap.get(eventId);

      if (!clients) return;

      for (const client of clients) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message); // Push Redis message to WebSocket client
        }
      }
    });
    console.log("Server subscribed to Redis ticket updates");


  
    // Start Express server
    const server = http.createServer(app);

    // start webscoket server
    const wss = new WebSocketServer({ server });

    const clientsMap: Map<string, Set<WebSocket>> = new Map();
    wss.on("connection", (ws, request) => {
      console.log("New WebSocket client connected");

      ws.send("Welcome to WebSocket server!");

      const url = new URL(request.url!, `http://${request.headers.host}`);
      const eventId = url.searchParams.get("eventId");

      if (!eventId) {
        ws.send(JSON.stringify({ error: "Missing eventId" }));
        ws.close();
        return;
      }

      if (!clientsMap.has(eventId)) clientsMap.set(eventId, new Set());
      clientsMap.get(eventId)!.add(ws);

      ws.send(JSON.stringify({ message: `Subscribed to event ${eventId}` }));
      ws.on("close", () => {
        console.log("WebSocket client disconnected");
      });
    });

    const date = new Date();
    server.listen(PORT, () => {
      console.log(
        `Server + WS running on port ${PORT} at ${date.toLocaleString()}`,
      );
    });

      // start worker
    await startBookingWorker();
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
}

startServer();
