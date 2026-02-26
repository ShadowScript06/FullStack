import React, { useCallback, useMemo, useState } from 'react'

function Problem11() {
  return (
    <div>
         <NumberList numbers={[1, 2, 3, 4]} />;
    </div>
  )
}

export default Problem11

const NumberItem = React.memo(({ number, onDouble }) => {
  console.log("NumberItem rendered:", number);
  return <button onClick={() => onDouble(number)}>{number}</button>;
});

const NumberList = ({ numbers }) => {
  const [list, setList] = useState(numbers);

  // Stable handler with useCallback
  const handleDouble = useCallback((num) => {
    setList((prevList) =>
      prevList.map((n) => (n === num ? n * 2 : n))
    );
  }, []);

  // Derived doubled numbers (optional, can be used for display)
  const doubledNumbers = useMemo(() => {
    return list.map((n) => n * 2);
  }, [list]);

  return (
    <div>
      <h3>Doubled Numbers:</h3>
      {doubledNumbers.map((n) => (
        <NumberItem key={n} number={n} onDouble={handleDouble} />
      ))}
    </div>
  );
};
