import React, { useState } from 'react'

function Problem10() {
    const[showFirstmessage,setShowFirstMessage]=useState(true);
  return (
    <div>
        <h1>{
            showFirstmessage? ("First Message"):("Second message")
            }</h1>

            <button onClick={()=>setShowFirstMessage(!showFirstmessage)}>Toggle</button>
    </div>
  )
}

export default Problem10