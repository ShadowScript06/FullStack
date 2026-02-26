import React, { useEffect, useRef, useState } from 'react'

function Problem7() {
    const [count,setCount]=useState(0);
    const countRef=useRef(count);
    const intervalRef=useRef(null);

    useEffect(()=>{
        countRef.current=count;
    },[count]);


    const startLogging=()=>{
        if(intervalRef.current) return;

        intervalRef.current=setInterval(()=>{
            console.log("Current count ", countRef.current);
        },2000);
    }

    const stopLogging=()=>{
        clearInterval(intervalRef.current);
        intervalRef.current=null;
    }


  return (
    <div>
         <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>

      <button onClick={startLogging}>
        Start Logging
      </button>

      <button onClick={stopLogging}>
        Stop Logging
      </button>
    </div>
  )
}

export default Problem7