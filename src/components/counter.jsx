import React, { Component } from "react";
import CounterDisplay from "./counterDisplay";

export default class Counter extends Component {
  state = {
    counterValue: 0
  };
  /* function */
  addValue = () => {
    this.setState({ counterValue: this.state.counterValue + 1 });
  };

  subValue = () => {
    this.setState({ counterValue: this.state.counterValue - 1 });
  };

  render() {
    return (
      <div>
        <CounterDisplay counterValue={this.state.counterValue} />
        <div>
          <button onClick={this.addValue}>Add+</button>
          <button onClick={this.subValue}>Sub-</button>
        </div>
      </div>
    );
  }
}
