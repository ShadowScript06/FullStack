import React, { useState } from 'react'

function Problem14() {
  return (
    <div>
        <Parent/>
    </div>
  )
}

export default Problem14

function Parent(){
    const [count,setCount]=useState(0);
    function increment(){
        setCount(()=>count+1);
    }
    return(
        <div>
            <h1>hi from Parent</h1>
            <h4>{count}</h4>
            <Child increment={increment}/>
        </div>
    )
}

function Child({increment}){
    return(
        <div>
            <h1>HI from child</h1>
            <button onClick={increment}>+</button>
        </div>
    )
}