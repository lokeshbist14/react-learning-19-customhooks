import React from 'react'
import useToggle from '../hooks/useToggle'

function ToggleExample() {
    const  {isOn, toggle } = useToggle();

  return (
    <div>
      <h2>Example 6 - useToggle</h2>  

      <h3>Status: {isOn ? "ON" : "OFF"}</h3>

      <button onClick={toggle}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default ToggleExample;
