import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Compare from './Pages/Compare';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="profile/:username" element={<Profile/>}/>
          <Route path="/compare" element={<Compare/>}/>
        </Routes>
    </div>
  )
}

export default App;