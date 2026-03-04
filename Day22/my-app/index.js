const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/product.routes");

const app = express();

app.use(express.json());

app.use("/products", productRoutes);

app.get('/', (req, res) => {
  res.json({ message: "Server is running 🚀" })
})

app.listen(5000, async () => {
  await connectDB();
  console.log("Server running");
});

