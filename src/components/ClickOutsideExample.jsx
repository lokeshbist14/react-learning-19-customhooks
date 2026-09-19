import { useCallback, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

function ClickOutsideExample() {
  const [isOpen, setIsOpen] = useState(false);

  const boxRef = useRef(null);

  const closeBox = useCallback(() => {
    setIsOpen(false);
  }, []);

  useClickOutside(boxRef, closeBox);

  return (
    <div>
      <h2>Example 12 - useClickOutside</h2>

      <button onClick={() => setIsOpen(true)}>
        Open Box
      </button>

      {isOpen && (
        <div
          ref={boxRef}
          style={{
            border: "2px solid black",
            padding: "20px",
            marginTop: "10px"
          }}
        >
          <h3>My Box</h3>
          <p>Click outside this box to close it.</p>
        </div>
      )}
    </div>
  );
}

export default ClickOutsideExample;