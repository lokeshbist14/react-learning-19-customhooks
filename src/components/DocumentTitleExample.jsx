import React, { useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';

function DocumentTitleExample() {
    const [count, setCount] = useState(0);

    useDocumentTitle(`Count: ${count}`);

  return (
    <div>
      <h2>Example 8 - useDocumentTitle</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default DocumentTitleExample;
