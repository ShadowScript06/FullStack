import React, { useState } from 'react'

function Problem18() {
    const[name,setName]=useState('');
    const[email,setemail]=useState('');

    function handleSubmit(e){
        e.preventDefault();

        alert(`${name},${email}`);
        setName("");
        setemail("");
    }
  return (
    <div>
        <form action="submit" onSubmit={handleSubmit}>
            <label >Name</label>
            <input type="text" placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='enter email'  value={email} onChange={(e)=>setemail(e.target.value)}/>

            <button type='submit'>Submit</button>
        </form>

        
    </div>
  )
}

export default Problem18