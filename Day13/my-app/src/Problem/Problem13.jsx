import React, { useState } from 'react'

function Problem13({title}) {
    const[likes,setLikes]=useState(0);
  return (
    <div>
        <h1>Title: {title}</h1>
        <h3>Likes: {likes}</h3>
        <button onClick={()=>{setLikes(likes+1)}}> Like</button>
    </div>
  )
}

export default Problem13