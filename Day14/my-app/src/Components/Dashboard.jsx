import React from 'react'
import { Routes,Route, Outlet } from 'react-router-dom'
import Profile from './Profile'

function Dashboard() {
  return (
    <div>
       Dashboard  
       <Outlet/> 
    </div>
  )
}

export default Dashboard