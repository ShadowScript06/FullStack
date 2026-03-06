import axios from "axios";
import React, { useEffect, useState } from "react";

const Stats = () => {
 
    const [totalFocusedTime,setTotalFocusedTime]=useState(0);

    const[completedSessions,setCompletedSession]=useState(0);

    const[inturruptions,setInturruptions]=useState(0);

    const[avgSession,setAvgSession]=useState(0);

  const statItems = [
    { title: "Total Focus Time", value: `${totalFocusedTime} min` },
    { title: "Completed Sessions", value: completedSessions },
    { title: "Total Interruptions", value: inturruptions },
    { title: "Average Session Length", value: `${avgSession} min` },
  ];

  useEffect(()=>{
    axios.get("http://localhost:5000/session/stats",{withCredentials:true}).then((res)=>{
        const data=res.data.data;
        if(res.data.success){
        setTotalFocusedTime(data.totalFocusTime);
        setCompletedSession(data.completeSession);
        setInturruptions(data.totalInterruptions);
        setAvgSession(data.avgSessionLength)
    }
    }).catch(alert("Internal Server Error."))
  },[])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {statItems.map((item, idx) => (
        <div
          key={idx}
          className=" shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition"
        >
          <p className="text-white text-sm mb-2">{item.title}</p>
          <p className="text-2xl font-bold text-purple-500">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;