import React from 'react'
import { Navigate, } from 'react-router-dom'

function PrivateRoute({children,isAuthenticated}) {

    if(!isAuthenticated){
        alert("Invalid access, please login.");
        return(
            <Navigate to="/login"
            />
        )
    }

    return children
  
}

export default PrivateRoute