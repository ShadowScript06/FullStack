import React from 'react'

type Props ={
    params:{
        id:string
    }
}

async function page({params}:Props) {
   const {id}=await params;
  return (
    <div>
        <h1>Blog post</h1>
        <h3>{id}</h3>
    </div>
  )
}

export default page