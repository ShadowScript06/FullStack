import React, { useContext } from 'react'
import AuthContext from './context/AuthContext'

function Name() {

    const {user}=useContext(AuthContext);
    

  return (
    <div>{user?  ("Name :", user.name):("")}</div>
  )
}

export default Name