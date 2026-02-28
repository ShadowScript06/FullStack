import React from 'react'
import { useSelector } from 'react-redux'

function Users() {
    const users=useSelector((state)=>state.users.users)

    if(users.length===0) return <h1>No users found</h1>
  return (
    <div>
        {users.map((user,index)=>{
            return (<li key={index}>{user}</li>)
        })}
    </div>
  )
}

export default Users