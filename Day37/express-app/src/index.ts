import express from "express";

const app=express();


app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ message: "ok" });
});

export default app;
