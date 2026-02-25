import React, { useState } from 'react'

function Problem15() {
  return (
    <div>
        <Parent/>
    </div>
  )
}

export default Problem15

function Parent(){
    const [list,setList]=useState([]);
    const[count,setCount]=useState(1);
    function handleAdd(){
        setList([...list,count]);
        setCount((prev)=> prev+1);
    }
    return(
        <div>
            <button onClick={handleAdd}>add To list</button>
            <Child list={list}/>
        </div>
    )
}

function Child({list}){
    return (
        <div>
            <ul>
                {list.map((item)=>{
                    return(<li>{item}</li>)
                })}
            </ul>
        </div>
    )
}