import React, { useEffect, useState } from 'react'

function List() {
    const [data,setData]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);


    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=> {
            setData(data);
            setIsLoading(false);
        }).catch(err=>{
            setError(err);
            setIsLoading(false);
        })
        },800);
        

        return()=>{
            setError(null);
            setIsLoading(true);
        }
    },[]);

     if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  return (
     <div>
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default List


