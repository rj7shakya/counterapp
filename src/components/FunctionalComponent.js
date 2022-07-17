import React, { useState } from "react";

const FunctionalComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <div className="counter">Counter</div>

      <div className="count">{counter}</div>

      <div className="plus__button" onClick={() => setCounter(counter + 1)}>
        +
      </div>
      <div className="plus__button" onClick={() => setCounter(counter - 1)}>
        -
      </div>
    </div>
  );
};

export default FunctionalComponent;
