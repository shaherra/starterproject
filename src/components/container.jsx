import React, { Component } from "react";
import Counter from "./counter";
import Calculator from "./calculator";

export default class Container extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#39afdc",
          height: 800,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Counter />
        <Calculator />
      </div>
    );
  }
}
