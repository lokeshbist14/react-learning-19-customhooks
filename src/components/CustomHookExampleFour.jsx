import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function CustomHookExampleFour() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div>
      <h2>Custom Hook Example 4</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>
    </div>
  );
}

export default CustomHookExampleFour;