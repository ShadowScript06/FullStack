import React, { useState } from 'react'
import { addUser } from '../redux/userSlice';
import { useDispatch } from 'react-redux';


function Form() {
    const [name,setName]=useState("");
    function addUsertoList(){
        dispatch(addUser(name));
        alert("userAdded");
        setName("");
    }
    const dispatch=useDispatch();

  return (
    <div>
        <h1>Enter Username</h1>
        <input type="text" name="" id=""  placeholder='Enter Username' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={addUsertoList}>Add user</button>
    </div>
  )
}

export default Form