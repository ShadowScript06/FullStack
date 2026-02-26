import React, { useMemo, useState } from "react";

function Problem10() {
  return (
    <div>
      <Parent users={["prajwal","raj"]}/>
    </div>
  );
}

export default Problem10;

const Parent = ({users}) => {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
 
  const filteredUsers = useMemo(() => {
   console.log("filtering");
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users,search]);

  console.log(filteredUsers);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count : {count}
      </button>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user) => {
          return <li key={user}>{user}</li>;
        })}
      </ul>
    </>
  );
};
