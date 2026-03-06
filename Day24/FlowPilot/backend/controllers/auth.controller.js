require("dotenv").config();
const authService = require("../services/auth.service");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const asyncHandler = require("../utils/asyncHandler");

const register = asyncHandler(async (request, response) => {
  const { name, email, password } = request.body;

  const user = await authService.registerUser(name, email, password);

  const token = jwt.sign(
    { userId: user._id }, // payload must be an object
    JWT_SECRET,
    { expiresIn: "1d" }, // optional, recommended
  );

  response.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  response.status(200).json({
    success: true,
    user,
    message: "User Registered succesfully.",
  });
});

const login = asyncHandler(async (request, response) => {
  const { email, password } = request.body;

  const user = await authService.loginUser(email, password);

  const token = jwt.sign(
    { userId: user._id }, // payload must be an object
    JWT_SECRET,
    { expiresIn: "1d" }, // optional, recommended
  );
  response.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  response.status(200).json({
    success: true,
    user,
    message: "User login succesful.",
  });
});

const logout = asyncHandler(async (request, response) => {
  request.session.destroy();

  response.clearCookie("flowpilot.sid");

  response.status(200).json({
    success: true,
    message: "User logged out",
  });
});

const me = asyncHandler(async (request, response) => {
  response.status(200).json({
    success: true,
    userId: request.session.userId,
  });
});

module.exports = {
  register,
  login,
  logout,
  me,
};
