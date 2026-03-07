// CreateSessionModal.jsx
import axios from "axios";
import React, { useState } from "react";

const CreateSessionModal = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  if (!isOpen) return null;

  const handleAdd = async () => {
    if (!title || !duration) return;

    try {
      const response = await axios.post(
        "https://flowpilot-ejd6.onrender.com/session",
        {
          title,
          plannedDuration: parseInt(duration),
        },
        { withCredentials: true },
      );

      if (response.data.status) {
        alert("Session added succesfully.");
      }
    } catch (error) {
      alert("Internal Server Error.");
    }
    setTitle("");
    setDuration("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-50">
      {/* Modal Box */}
      <div className="bg-white rounded-lg shadow-xl w-96 p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-semibold mb-4 text-purple-500">
          Create Session
        </h2>

        <div className="flex flex-col space-y-4">
          {/* Session Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              className="w-full border text-black border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Session title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Planned Duration */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Planned Duration (minutes)
            </label>
            <input
              type="number"
              min="1"
              className="w-full border  text-black border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., 30"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

          {/* Add Button */}
          <button
            onClick={handleAdd}
            className="bg-purple-500 text-white font-semibold py-2 rounded-lg cursor-pointer hover:bg-purple-600 transition-colors"
          >
            Add Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSessionModal;
