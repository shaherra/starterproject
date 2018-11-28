import React, { Component } from "react";

export default class CounterDisplay extends Component {


  render() {
    return (
      <div>
        <p>Counter : {this.props.counterValue}</p>
        
      </div>
    );
  }
}
