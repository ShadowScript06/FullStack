import React, { useState } from 'react'

function Problem16() {
    const[input,setInput]=useState("");
  return (
    <div>
        <input type="text" onChange={(e)=>setInput(e.target.value)} />

        <p>{input}</p>
    </div>
  )
}

export default Problem16