// ModernSidebar.jsx
import React, { useState } from "react";

const Sidebar = ({openModal,setPage}) => {
  const [active, setActive] = useState("Sessions");
    function handleAddSession(){
        setActive("New Session");
        openModal();
    }

    function handleSessions(){
        setActive("Sessions")
        setPage("Sessions")
    }

    function handleStats(){
        setActive("Stats")
        setPage("Stats")
    }
  return (
    <div className="w-64 h-full bg-gray-900 text-white flex flex-col justify-between shadow-lg">
      <div>
        {/* Menu */}
        <div className="flex flex-col mt-6 space-y-2 px-4">
          

          {/* Sessions */}
          <button
            onClick={handleSessions}
            className={`flex items-center p-3 rounded-lg transition-colors  duration-200 ${
              active === "Sessions"
                ? "bg-purple-500 shadow-lg"
                : "hover:bg-gray-800"
            } cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Sessions
          </button>

          {/* New Session */}
          <button
            onClick={handleAddSession}
            className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
              active === "New Session"
                ? "bg-purple-500 shadow-lg"
                : "hover:bg-gray-800"
            } cursor-pointer`}

            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New Session
          </button>

          {/* Stats */}
          <button
            onClick={handleStats}
            className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
              active === "Stats"
                ? "bg-purple-500 shadow-lg"
                : "hover:bg-gray-800"
            } cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              
            >
              <line x1="12" y1="20" x2="12" y2="10" />
              <line x1="18" y1="20" x2="18" y2="4" />
              <line x1="6" y1="20" x2="6" y2="16" />
            </svg>
            Stats
          </button>
        </div>
      </div>

      

      {/* Bottom section: Username */}
      <div className="px-4 py-6 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white">
            P
          </div>
          <div>
            <p className="font-medium">Prajwal Jadhav</p>
            <p className="text-gray-400 text-sm">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
