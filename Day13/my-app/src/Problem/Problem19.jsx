import React, { useRef } from 'react'

function Problem19() {

    const emailRef=useRef();
    const nameRef=useRef();
    function handleSubmit(e){
        e.preventDefault();

        alert(`${nameRef.current.value},${emailRef.current.value}`);
        nameRef.current.value="";
        emailRef.current.value="";
    }

  return (
    <div>
         <form action="submit" onSubmit={handleSubmit}>
            <label >Name</label>
            <input type="text" placeholder='Enter name'  ref={nameRef}/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='enter email'ref={emailRef} />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Problem19