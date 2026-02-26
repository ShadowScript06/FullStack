import React, { useEffect, useState } from "react";

function Problem5() {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  function handleButton() {
    setIsRunning(!isRunning);
  }

  useEffect(()=>{
    if(!isRunning) return;

    const interval=setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
    },1000);

    return()=>{
        clearInterval(interval);
    }
  },[isRunning]);
  return (
    <div>
        <h3>{time}</h3>
      <button onClick={handleButton}>PAUSE/START</button>
    </div>
  );
}

export default Problem5;
