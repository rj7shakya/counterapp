import React, { useState } from "react";

const functionTest = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Count:{count}
      <div
        onClick={() => {
          setCount(count + props?.increaseBy);
        }}
      >
        +
      </div>
    </div>
  );
};

export default functionTest;
