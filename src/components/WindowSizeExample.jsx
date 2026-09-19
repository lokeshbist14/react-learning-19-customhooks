import useWindowSize from "../hooks/useWindowSize";

function WindowSizeExample() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Example 11 - useWindowSize</h2>

      <h3>Width: {width}px</h3>
      <h3>Height: {height}px</h3>
    </div>
  );
}

export default WindowSizeExample;