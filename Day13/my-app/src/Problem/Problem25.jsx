import React, { useState } from 'react'

function Problem25() {
    const[bool]=useState(false);
  return (
    <div>{bool &&"Problem25"}</div>
  )
}

export default Problem25