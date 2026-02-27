import React, { } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
    
    const navigate=useNavigate()
  return (
    <div>Home 
        <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
        <Navbar/>
    </div>
  )
}

export default Home