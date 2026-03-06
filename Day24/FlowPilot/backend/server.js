require("dotenv").config;
const app = require("./app");
const connectDB = require("./config/connectDB");

const PORT = process.env.PORT || 5000;

const date = new Date();

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, async () => {
      console.log(
        "Server is Running on port: " + PORT + " at " + date.toLocaleString(),
      );
    });
  } catch (error) {
    console.log("Server failed to start, ", error);
    process.exit(1);
  }
}

startServer();
