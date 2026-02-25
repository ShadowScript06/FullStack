import React from 'react'

function Problem21() {
    const list=[{
        id:1,
        name:"prajwal"
    },
{
        id:2,
        name:"raj"
    },
{
        id:3,
        name:"yogi"
    }]
  return (
    <div><ul>{list.map((item)=>{
        return(<li key={item.id}>{item.name}</li>)
    })}
        </ul></div>
  )
}

export default Problem21