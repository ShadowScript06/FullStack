// Dashboard.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import CreateSessionModal from "../components/Dashboard/CreateSessionModal";
import SessionCard from "../components/Dashboard/SessionCard";
import Stats from "../components/Dashboard/Stats";
import axios from "axios";

function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [page,setPage]=useState("Sessions");


  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Sample session data (can be replaced with API data)
  const [sessions, setSessions] = useState([]);

 useEffect(()=>{
    axios.get("http://localhost:5000/session",{withCredentials:true}).then((res)=>{
        if(res.data.success){
            setSessions(res.data.sessions)
        }
    }).catch();
 },[page]);


  

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar openModal={openModal} setPage={setPage} />

        {/* Main session area */}
        <main className="flex-1 p-6 overflow-y-auto ">
          <h1 className="text-2xl font-bold mb-4">{page}</h1>

            {page==="Sessions" ?  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            
            {sessions.map((session) => (
              <SessionCard
                key={session._id}
                title={session.title}
                plannedDuration={session.plannedDuration}
                sessionId={session._id}
                sessionStatus={session.status}
              />
            ))}
          </div>: <Stats/>}
          {/* Session Cards Grid */}
         
        </main>

       
      </div>
       

      {/* Create Session Modal */}
      <CreateSessionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        
      />
    </div>
  );
}

export default Dashboard;
