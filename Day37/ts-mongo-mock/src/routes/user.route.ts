// src/routes/user.route.ts
import express from "express";
import { getUserById } from "../services/user.service.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const user = await getUserById(req.params.id);

  if (!user) return res.status(404).json({ error: "Not found" });

  res.json(user);
});

export default router;