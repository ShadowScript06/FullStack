import React, { useState } from "react";
import useFetch from "./customHooks/useferch";

function Problem14() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h2>User Info:</h2>
        <h1>Name : {data.name}</h1>
        <h3>Age : {data.age}</h3>
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}
      >
        Fetch Posts
      </button>
    </div>
  );
}

export default Problem14;
