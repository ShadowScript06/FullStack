import React, { useState } from 'react'

function Problem1() {
    const [count,setCount]=useState(0);

    const items=[1,2,3,4,5];


  return (
    <div >
        <h1>Problem1</h1>
        <button onClick={()=>setCount(c=>c+1)}>Count :{count}</button>

        {items.map((item)=>{
           return( <MemoisedItem key={item} value={item}/>
       ) })}
    </div>
  )
}

export default Problem1

const MemoisedItem=React.memo(({value})=>{
    console.log("Item rendered", value);

    return (
        <div>{value}</div>
    )
})

