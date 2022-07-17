import React, { Component } from "react";

export default class ClassTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return {
      <div>
        Count:{this.state.count}
        <div
          onClick={() => {
            this.setState({
              count: this.state.count + this.props?.increaseBy,
            });
          }}
        >
          +
        </div>
      </div>
        };
  }
}
