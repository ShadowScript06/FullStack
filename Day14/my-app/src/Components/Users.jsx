import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();

  const role = searchParams.get("role");
    
  const handleFilter = (selectedRole) => {
    setSearchParams({ role: selectedRole });
  };

  return (
    <div>
      <h2>Users page</h2>

      <div>
        <button onClick={() => handleFilter("admin")}> Admin</button>
        <button onClick={() => handleFilter("user")}>User</button>
        <button onClick={() => setSearchParams({})}>All</button>
      </div>

       <h3>
        Showing: {role ? `${role} Users` : "All Users"}
      </h3>

      <br />

      <Link to="/users">Reset Filter</Link>
    </div>
  );
}

export default Users;
