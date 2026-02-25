import React, { useRef } from 'react'

function Problem17() {
    const inputRef=useRef();

  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={()=>{console.log(inputRef.current.value)}}>Click</button>
    </div>
  )
}

export default Problem17