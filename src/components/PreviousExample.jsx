import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

function PreviousExample() {
  const [count, setCount] = useState(0);

  const previousCount = usePrevious(count);

  return (
    <div>
      <h2>Example 7 - usePrevious</h2>

      <h3>Current: {count}</h3>
      <h3>Previous: {previousCount}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default PreviousExample;