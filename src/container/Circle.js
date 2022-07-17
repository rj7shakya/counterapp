import React, { Component } from "react";

export default class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgcolor: "red",
    };
  }

  render() {
    return (
      <div
        className="circle"
        style={{ backgroundColor: this.state.bgcolor }}
        onClick={() => {
          this.setState({
            bgcolor: this.state.bgcolor === "red" ? "blue" : "red",
          });
        }}
      ></div>
    );
  }
}
