import React, { useCallback } from 'react'

function Problem9() {
  return (
    <div><Parent/></div>
  )
}

export default Problem9

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

const Parent = () => {
  const [count, setCount] = React.useState(0);

  const handleClick =useCallback(() => {
    console.log("Clicked");
  },[]) 

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <Child onClick={handleClick} />
    </>
  );
};

