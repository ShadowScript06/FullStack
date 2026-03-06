const express = require("express");

const router = express.Router();
const inputValidator = require("../validators/inputValidator");

const sessionController = require("../controllers/session.controller");

const { createSessionSchema } = require("../validations/session.validation");

const userAuth = require("../middlewares/user.auth.middleware");

router.post(
  "/",
  userAuth,
  inputValidator(createSessionSchema),
  sessionController.createSession,
);

router.post("/:id/start", userAuth, sessionController.startSession);

router.post("/:id/pause", userAuth, sessionController.pauseSession);

router.post("/:id/resume", userAuth, sessionController.resumeSession);

router.post("/:id/complete", userAuth, sessionController.completeSession);

router.get("/", userAuth, sessionController.getSessions);

router.get("/stats", userAuth, sessionController.getSessionStats);

router.get("/:id", userAuth, sessionController.getSessionById);

module.exports = router;
