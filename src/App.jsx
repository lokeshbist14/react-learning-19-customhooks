import React from "react";
import useCounter from "./hooks/useCounter";
import CustomHookExampleTwo from "./components/CustomHookExampleTwo";
import CustomHookExampleThree from "./components/CustomHookExampleThree";
import CustomHookExampleFour from "./components/CustomHookExampleFour";
import CustomHookExampleFive from "./components/CustomHookExampleFive";
import ToggleExample from "./components/ToggleExample";
import PreviousExample from "./components/PreviousExample";
import DocumentTitleExample from "./components/DocumentTitleExample";
import OnlineStatusExample from "./components/OnlineStatusExample";
import TimeoutExample from "./components/TimeoutExample";
import WindowSizeExample from "./components/WindowSizeExample";
import ClickOutsideExample from "./components/ClickOutsideExample";

function App() {
  // Example 1
  const { count, increase, decrease } = useCounter();

  return (
    <div>
      {/* Example 1 */}
      <h2>Custom Hook Example 1</h2>

      <h2>Count: {count}</h2>

      <button onClick={increase}>
        Increase
      </button>

      <button onClick={decrease}>
        Decrease
      </button>

      <hr />

      {/* Example 2 */}
      <CustomHookExampleTwo />
      <hr />

      {/* Example 3 */}
      <CustomHookExampleThree />
      <hr />

      {/* Example 4 */}
      <CustomHookExampleFour />
      <hr />

      {/* Example 5 */}
      <CustomHookExampleFive />
      <hr />

      {/* Example 6 */}
      <ToggleExample />
      {/* Example 7 */}
      <PreviousExample />

      {/* Example 8 */}
      <DocumentTitleExample />

      {/* Example 9  */}
      <OnlineStatusExample />

      {/* Example 10 */}
      <TimeoutExample />

      {/* Example 11 */}
      <WindowSizeExample />

      {/* Example 12 */}
      <ClickOutsideExample />
      
    </div>
  );
}

export default App;