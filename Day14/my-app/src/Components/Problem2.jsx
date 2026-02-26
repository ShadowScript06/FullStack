import React from 'react'

function Problem2() {
  const [count, setCount] = React.useState(0);

  

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>

      <Card  />
    </>
  );
}

export default Problem2

const Card = React.memo(() => {
  console.log("Card rendered");
  return <button onClick={()=>console.log("Deleted.")}>Delete</button>;
});