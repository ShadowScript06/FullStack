import {  useSuspenseQuery } from "@tanstack/react-query";
import React from "react";


function Users() {
  const { data } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return (
    <div>
      <h2>Users</h2>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json(),
  );
}
