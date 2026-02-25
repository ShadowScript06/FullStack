import React, { useState } from 'react'

function Problem24() {
    const[loggedIn,setLoggedIn]=useState(true);

    function handleToggle(){
        setLoggedIn(!loggedIn);
    }
  return (
    <div>
        <h1>{loggedIn ? "USER": "Please log in"}</h1>
        <button onClick={handleToggle}>{loggedIn ? "Logout": "Login"}</button>
    </div>
  )
}

export default Problem24