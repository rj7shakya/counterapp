import React from "react";
import Circle from "./Circle";
import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <Circle />
      <div className="square"></div>
    </div>
  );
};

export default Container;
