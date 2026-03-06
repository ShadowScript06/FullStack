import axios from "axios";
import React, { useState, useEffect } from "react";

const SessionCard = ({ title, plannedDuration, sessionId, sessionStatus }) => {
  // Map backend status to local state
  const [status, setStatus] = useState(sessionStatus); // CREATED, STARTED, PAUSED, COMPLETED
  const [isPaused, setIsPaused] = useState(sessionStatus === "PAUSED");

  // Update local state if backend sessionStatus changes
  useEffect(() => {
    setStatus(sessionStatus);
    setIsPaused(sessionStatus === "PAUSED");
  }, [sessionStatus]);

  // Start session
  const handleStart = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/session/${sessionId}/start`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) setStatus("STARTED");
    } catch (err) {
      alert("Internal Server Error.")
    }
  };

  // Pause / Resume session
  const handlePauseResume = async () => {
    const action = isPaused ? "resume" : "pause";
    try {
      const res = await axios.post(
        `http://localhost:5000/session/${sessionId}/${action}`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        setIsPaused(!isPaused);
        setStatus(!isPaused ? "PAUSED" : "STARTED");
      }
    } catch (err) {
      alert("Internal Server Error.")
    }
  };

  // Complete session
  const handleComplete = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/session/${sessionId}/complete`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) setStatus("COMPLETED");
    } catch (err) {
      alert("Internal Server Error.")
    }
  };

  return (
    <div className="bg-gray-900 shadow-lg rounded-xl p-6 w-full">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">
        Planned Duration: {plannedDuration} minutes
      </p>

      {/* Buttons */}
      <div className="flex space-x-3">
        {status === "CREATED" && (
          <button
            onClick={handleStart}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Start
          </button>
        )}

        {status === "STARTED" || status === "PAUSED" ? (
          <>
            <button
              onClick={handlePauseResume}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={handleComplete}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Complete
            </button>
          </>
        ) : null}
      </div>

      {/* Status text */}
      {status === "COMPLETED" && (
        <p className="mt-4 text-green-600 font-semibold">Session Completed ✅</p>
      )}
      {status === "STARTED" && !isPaused && (
        <p className="mt-4 text-purple-500 font-medium">Session Running ⏱️</p>
      )}
      {status === "PAUSED" || (status === "STARTED" && isPaused) ? (
        <p className="mt-4 text-yellow-500 font-medium">Session Paused ⏸️</p>
      ) : null}
    </div>
  );
};

export default SessionCard;