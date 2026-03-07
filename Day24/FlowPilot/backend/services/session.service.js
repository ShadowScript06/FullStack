const Session = require("../models/session.model");
const mongoose = require("mongoose");
const AppError = require("../utils/AppError");

async function createSession(userId, data) {
  const session = await Session.create({
    userId,
    title: data.title,
    plannedDuration: data.plannedDuration,
  });

  return session;
}

async function startSession(userId, sessionId) {
  const session = await Session.findOne({
    _id: sessionId,
    userId,
  });

  if (!session) {
    throw new AppError("Session not Found",404);
  }

  console.log(session.status);

  if (session.status !== "CREATED") {
    throw new AppError("Session cannot be started",400);
  }

  session.status = "STARTED";
  session.startedAt = new Date();

  await session.save();

  return session;
}

async function pauseSession(userId, sessionId) {
  const session = await Session.findOne({
    _id: sessionId,
    userId,
  });

  if (!session) {
    throw new AppError("Session not found",404);
  }

  if (session.status !== "STARTED") {
    throw new AppError("Session cannot be Paused.",400);
  }

  session.status = "PAUSED";

  session.pausedAt = new Date();

  await session.save();

  return session;
}

async function resumeSession(userId, sessionId) {
  const session = await Session.findOne({
    _id: sessionId,
    userId,
  });

  if (!session) {
    throw new AppError("Session not found",404);
  }

  if (session.status !== "PAUSED") {
    throw new AppError("Session cannot be resumed",400);
  }

  const pauseDuration = new Date() - session.pausedAt;

  session.totalPausedDuration += pauseDuration;

  session.status = "STARTED";

  session.pausedAt = null;

  await session.save();

  return session;
}

async function completeSession(userId, sessionId) {
  const session = await Session.findOne({
    _id: sessionId,
    userId,
  });

  if (!session) {
    throw new AppError("Session not found",404);
  }


  session.status = "COMPLETED";
  session.completedAt = new Date();

  await session.save();

  return session;
}

async function getSessions(userId, query) {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;

  const skip = (page - 1) * limit;

  const sessions = await Session.find({ userId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  return sessions;
}

async function getSessionById(userId, sessionId) {
  const session = await Session.findOne({
    _id: sessionId,
    userId,
  });

  if (!session) {
    throw new AppError("Session not found",404);
  }

  return session;
}




/**
 * Get aggregated session stats for a user
 * @param {string} userId
 */
async function getSessionStats(userId) {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("Invalid userId");
  }

  const stats = await Session.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(userId),
        status: "COMPLETED",
      },
    },
    {
      $project: {
        // focusDuration = plannedDuration - totalPausedDuration
        focusDuration: {
          $subtract: [
            { $ifNull: ["$plannedDuration", 0] },
            { $ifNull: ["$totalPausedDuration", 0] },
          ],
        },
        interruptions: {
          $cond: [{ $gt: [{ $ifNull: ["$totalPausedDuration", 0] }, 0] }, 1, 0],
        },
      },
    },
    {
      $group: {
        _id: null,
        totalFocusTime: { $sum: "$focusDuration" },
        completeSession: { $sum: 1 },
        totalInterruptions: { $sum: "$interruptions" },
        avgSessionLength: { $avg: "$focusDuration" },
      },
    },
  ]);

  const result = stats[0] || {
    totalFocusTime: 0,
    completeSession: 0,
    totalInterruptions: 0,
    avgSessionLength: 0,
  };

  return {
    totalFocusTime: result.totalFocusTime, // already in same unit as plannedDuration
    avgSessionLength: result.avgSessionLength,
    totalInterruptions: result.totalInterruptions,
    completeSession: result.completeSession,
  };
}




module.exports = {
  createSession,
  startSession,
  pauseSession,
  resumeSession,
  completeSession,
  getSessions,
  getSessionById,
  getSessionStats,
};
