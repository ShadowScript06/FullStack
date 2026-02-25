import React from 'react'

function Problem9({list}) {

  return (
    <div>
        <ul>
            {list.map((item)=>{
                return (<li>{item}</li>)
            })}
        </ul>
    </div>
  )
}

export default Problem9