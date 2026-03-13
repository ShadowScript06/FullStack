import express, { Request, Response } from "express";
import cors from "cors";
import { WebSocketServer } from "ws";
import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.



const app = express();

app.use(limiter)
app.use(cors());
app.use(express.json());

let messages: string[] = [];

// long polling
app.get("/messages", (request: Request, response: Response) => {
  const clientLength = request.query.length || 0;
  if (messages.length !== clientLength) {
    return response.status(200).json(messages);
  }

  const interval = setInterval(() => {
    if (messages.length !== clientLength) {
      clearInterval(interval);
      clearTimeout(timeout);
      return response.status(200).json(messages);
    }
  }, 1000);

  const timeout = setTimeout(() => {
    clearInterval(interval);
    response.status(200).json(messages);
  }, 30000);
});

app.post("/message", (request: Request, response: Response) => {
  const { message } = request.body;

  messages.push(message);

  response.status(200).json({
    message: "Message added succesfully",
  });
});

// short polling server
app.get("/short", (request: Request, response: Response) => {
  response.status(200).json({
    data: [
      { name: "Prajwal", city: "Pune" },
      { name: "raj", city: "Solapur" },
    ],
  });
});

const server = app.listen(5000, () => {
  console.log("Server is running on port 5000");
});









// Webhook

app.post("/webhook", (request: Request, response: Response) => {
  const { type, name } = request.body;

  console.log(`Webhook Recieved: Type :- ${type} , Name: ${name}`);

  response.status(200).send("Webhook recieved");
});

// service of user creation

const users: String[] = [];

app.post("/users", async (request: Request, response: Response) => {
  const { name } = request.body;

  users.push(name);

  await fetch("http://localhost:5000/webhook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "User.created", name }),
  });
});























/// WebSocket

const wss = new WebSocketServer({ server });

wss.on("connection", (socket) => {
  console.log("Client connected");
  socket.send(JSON.stringify(messages));

  socket.on("message", (msg) => {
    const message = msg.toString();
    messages.push(message);

    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(JSON.stringify(messages));
      }
    });

    socket.on("close", () => {
      console.log("Client disconnected");
    });
  });
});
