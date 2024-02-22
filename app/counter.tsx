import React, { useState } from "react";
import "./Counter.css"; // Import the CSS file

const Counter = () => {
  const [count, setCount] = useState(0);
  const [displayText, setDisplayText] = useState("Tespih");
  const [countTo33, setCountTo33] = useState(0);

  const handleClick = () => {
    if (count === 33) {
      setDisplayText(`${countTo33 + 1} !`);
      setCount(0);
      setCountTo33(countTo33 + 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="counter-container">
      <p className="counter-text">{displayText}</p>
      <p className="counter-number">{count}</p>
      <button className="counter-button" onClick={handleClick}>
        ▲
      </button>
    </div>
  );
};

export default Counter;
