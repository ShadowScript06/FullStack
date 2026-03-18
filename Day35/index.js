const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Booking Service Running 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});