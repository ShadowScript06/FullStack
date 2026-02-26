import React, { useEffect, useRef, useState } from 'react'

function Problem6() {
    const [count,setCount]=useState(0);
   
    const ref=useRef(0);

        useEffect(()=>{
             ref.current++
             console.log(ref.current);
        })

       
    
  return (
    <div>
        <button onClick={()=>setCount((prev)=>prev+1)}>Count: {count}</button>
        <h3>ref: </h3>
    </div>
  )
}

export default Problem6