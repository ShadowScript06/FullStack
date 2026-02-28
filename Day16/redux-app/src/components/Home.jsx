import React from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter";

function Home() {
  const users = useSelector((state) => state.users.users);
  return (
    <>
      <div>No of users: {users.length}</div>
      <Counter />
    </>
  );
}

export default Home;
