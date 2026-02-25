import React, { useState } from 'react'

function Problem20() {
    const [form,setForm]=useState({
        firstname:"",
        lastName:"",
        email:""
    })

    function handleChange(e){
        setForm({...form, [e.target.name]:e.target.value});
    }
  return (
    <div>
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <p>Full Info: {form.firstName} {form.lastName} ({form.email})</p>
    </div>
  )
}

export default Problem20