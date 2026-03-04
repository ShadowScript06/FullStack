const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
); // imp step to pass cookie from fe to server

const secret = "superSecret";

const user = {
  id: 1,
  email: "prajwal@gmail.com",
  password: bcrypt.hashSync("123456", 10),
};

// login
app.post("/login", async (request, response) => {
  const { email, password } = request.body;

  if (email !== user.email) {
    return response.status(400).json({
      message: "Invalid Credentials.",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      message: "Inavlid Credentials.",
    });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, secret, {
    expiresIn: "1h",
  });

  response.cookie("token", token, {
    httpOnly: true,
    secure: false, // true in production // https
    sameSite: "lax",
    maxAge: 60 * 60 * 100, // 1hr
  });

  response.status(200).json({
    message: "Login Succesful",
  });
});

// authmiddleware
const authMiddleware = (request, response, next) => {
  const token = request.cookies.token;
  if (!token) {
    return response.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    request.user = decoded;
    next();
  } catch (error) {
    return response.status(401).json({ message: "Invalid token" });
  }
};

// protected route
app.get("/dashboard", authMiddleware, (request, response) => {
  response.json({
    message: "Welcome to dashboard",
    user: request.user,
  });
});

app.post("/logout", (request, response) => {
  response.clearCookie("token");
  response.status(200).json({
    message: "Logout Succesful",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
