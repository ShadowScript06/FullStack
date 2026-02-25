import React, { useState } from 'react'

function Problem27() {
      const [inputValue, setInputValue] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`You typed: ${inputValue}`);
    setInputValue(""); // Optional: reset input
  };
  return (
    <div> <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form></div>
  )
}

export default Problem27