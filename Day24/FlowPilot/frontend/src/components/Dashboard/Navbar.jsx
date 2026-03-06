import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  

  const [input, setInput] = useState();
  async function handleLogout(e) {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/auth/logout",
        {},
        { withCredentials: true },
      );
      navigate("/");
    } catch (error) {
      
      alert("Internal Server Error");
    }
  }
  return (
    <div className="flex w-full border-b border-gray-700 drop-shadow-lg px-8 py-2 justify-between items-center">
      <h1
        className="font-bold text-2xl text-purple-500 cursor-pointer"
        onClick={() => navigate("/")}
      >
        FlowPilot
      </h1>

      <div className="border border-gray-500 p-2 rounded-4xl flex w-1/2">
        <input
          className="outline-none ml-4 w-[95%]"
          type="text"
          name=""
          id=""
          placeholder="Search..."
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-gray-400 cursor-pointer hover:text-white"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>

      <button
        onClick={(e) => handleLogout(e)}
        className="bg-purple-500 p-2 rounded-md hover:text-gray-500 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
