import React from "react";
import useResetCounter from "../hooks/useResetCounter";

function CustomHookExampleThree() {
  const { count, increase, decrease, reset } = useResetCounter();

  return (
    <div>
      <h2>Custom Hook Example 3</h2>

      <h2>Count: {count}</h2>

      <button onClick={increase}>
        Increase
      </button>

      <button onClick={decrease}>
        Decrease
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default CustomHookExampleThree;