import React from 'react'
import useToggle from './customHooks/usetoggle'

function Problem12() {
    const[IsOpen,toggle]=useToggle(true);
  return (
    <div>
        <button onClick={toggle}>{IsOpen ? "Close" : "Open"}</button>
    </div>
  )
}

export default Problem12