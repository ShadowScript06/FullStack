import React from "react";

function Problem28() {
  const actions = [
    { label: "Say Hello", handler: () => alert("Hello!") },
    { label: "Say Bye", handler: () => alert("Bye!") },
    {
      label: "Random Number",
      handler: () => alert(Math.floor(Math.random() * 100)),
    },
  ];

  return (
    <div>
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.handler}
          style={{ marginRight: "10px" }}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}

export default Problem28;
