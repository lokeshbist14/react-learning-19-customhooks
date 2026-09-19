import React from "react";
import useFetch from "../hooks/useFetch";

function CustomHookExampleFive() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Custom Hook Example 5</h2>

      {data.map((user) => (
        <p key={user.id}>
          {user.id}. {user.name}
        </p>
      ))}
    </div>
  );
}

export default CustomHookExampleFive;