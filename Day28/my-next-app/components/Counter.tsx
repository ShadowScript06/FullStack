"use client"

import { useState } from "react"

function Counter() {

    const [count,setcount]=useState(0);


  return (
    <button onClick={()=>setcount(prev=>prev+1)}>Count: {count}</button>
  )
}

export default Counter