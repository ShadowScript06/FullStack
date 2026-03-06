import React from 'react'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import AuthProtectedWrapper from './utils/AuthProtectedWrapper'



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
        
        <Route path="/dashboard" element={<AuthProtectedWrapper><Dashboard/></AuthProtectedWrapper>}/>
      </Routes>

     
    </div>
  )
}

export default App