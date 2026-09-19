import { useCallback, useState } from "react";
import useTimeout from "../hooks/useTimeout";

function TimeoutExample() {
  const [message, setMessage] = useState("Waiting...");

  const showMessage = useCallback(() => {
    setMessage("Hello! 3 seconds are finished 🎉");
  }, []);

  useTimeout(showMessage, 3000);

  return (
    <div>
      <h2>Example 10 - useTimeout</h2>

      <h3>{message}</h3>
    </div>
  );
}

export default TimeoutExample;