import React, { useState } from "react";

function Problem3() {
  // Problem1
  const [count, setCount] = useState(0);
  // Problem2
  const [isOn, setIsOn] = useState(true);
  // Problem3
  const [user, setUser] = useState({
    name: "Prajwal",
    skills: ["JS", "React"],
  });
  // Problem4
  const [todos, setTodos] = useState([
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build Project" }
]);




  function handleAddSkill() {
    setUser({ ...user, skills: [...user.skills, "node"] });
  }

  function handleRemove(id){
    setTodos(todos.filter((todo)=>{
        return (todo.id!==id);
    }))
  }

 
  return (
    <div>
      <h3>count: {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setCount((prev) => prev + 5)}>+5</button>

      <h3>{isOn ? "On" : "Off"}</h3>
      <button
        onClick={() => {
          setIsOn(!isOn);
        }}
      >
        Switch
      </button>

      <button onClick={handleAddSkill}>ADD Skill</button>
        {/* Problem3 */}
      {user.skills.map((skill,index) => {
        return <li key={index}>{skill}</li>;
      })}
        {/* // Problem 4 */}
      {todos.map((todo)=>{
        return (<li key={todo.id}>{todo.text} <button onClick={()=>handleRemove(todo.id)}>Remove</button> </li>)
      })}
    </div>
  );
}

export default Problem3;
