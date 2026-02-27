import React from 'react'

function Heavy() {
    console.log("Heavy Loaded");
    const bigArray=new Array(100000000).fill("Heavy data");
  return (
    <div>
        <h1>Heavy Dashboard</h1>
        <p>{bigArray.length} items loaded</p>
    </div>
  )
}

export default Heavy