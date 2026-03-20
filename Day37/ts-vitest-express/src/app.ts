// src/app.ts
import express from "express";
import type { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "ok" });
});

app.post("/book", (req: Request, res: Response) => {
  const { tickets }: { tickets: number } = req.body;

  if (tickets <= 0) {
    return res.status(400).json({ error: "No tickets left" });
  }

  res.json({ remaining: tickets - 1 });
});

export default app;