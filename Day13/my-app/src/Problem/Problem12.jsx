import React, { useState } from 'react'

function Problem12() {
    const[count,setCount]=useState(0);

    function handleIncrement(){
        setCount(count+1);
    }
  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={handleIncrement}>Increase</button>
    </div>
  )
}

export default Problem12