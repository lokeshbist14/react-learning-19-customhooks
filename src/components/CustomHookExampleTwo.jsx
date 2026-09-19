import React from "react";
import useStepCounter from "../hooks/useStepCounter";

function CustomHookExampleTwo() {
  const { count, increase, decrease } = useStepCounter(5);

  return (
    <div>
      <h2>Custom Hook Example 2</h2>

      <h2>Count: {count}</h2>

      <button onClick={increase}>
        Increase by 5
      </button>

      <button onClick={decrease}>
        Decrease by 5
      </button>
    </div>
  );
}

export default CustomHookExampleTwo;