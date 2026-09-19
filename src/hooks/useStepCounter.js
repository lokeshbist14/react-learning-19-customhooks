import { useState } from "react";

function useStepCounter(step) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + step);
  };

  const decrease = () => {
    setCount(count - step);
  };

  return {
    count,
    increase,
    decrease,
  };
}

export default useStepCounter;