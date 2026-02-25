import React, { useState } from 'react';

function Problem22() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

  function removeItem(indexToRemove) {
    setFruits(fruits.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit} <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Problem22;