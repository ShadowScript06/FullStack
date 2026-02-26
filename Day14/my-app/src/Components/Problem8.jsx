import React, { useMemo, useState } from 'react'

function Problem8() {
    
    const [count,setCount]=useState(0);

   

  return (
    <div>
        <button onClick={()=>{setCount(prev=>prev+1)}}>Count : {count}</button>
        <Numberlist number={8}/>

        <Parent/>
    </div>
  )
}

export default Problem8

const Numberlist=({number})=>{
    function getsum(num){
        console.log("calculating");
        let ans=0;
        for(let i=1; i<=num; i++){
            ans+=i*i;
        }
        return ans;
    }

    const sumOfNumbers=useMemo(()=>{
       return  getsum(number);
    },[number]) ;

    return(<div> Sum of numbers : {sumOfNumbers}</div>)
}


const Child = React.memo(({ config }) => {
  console.log("Child rendered");
  return <div>{config.label}</div>;
});

const Parent = () => {
  const [count, setCount] = React.useState(0);

  const config =useMemo(()=>{
    return { label: "Hello" }
  },[]) ;

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <Child config={config} />
    </>
  );
};

