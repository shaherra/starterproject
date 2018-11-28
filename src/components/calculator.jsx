import React, { Component } from "react";

export default class Calculator extends Component {
  state = {
    number1: "",
    number2: "",
    answer: ""
  };

  calculate = operator => {
    switch (operator) {
      case "add":
        this.setState({
          answer: Number(this.state.number1) + Number(this.state.number2)
        });
        break;
      case "sub":
        this.setState({
          answer: Number(this.state.number1) - Number(this.state.number2)
        });
        break;
      case "div":
        this.setState({
          answer: Number(this.state.number1) / Number(this.state.number2)
        });
        break;
      case "mul":
        this.setState({
          answer: Number(this.state.number1) * Number(this.state.number2)
        });
        break;
    }
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* displaying the state */}
        <p>The result is : {this.state.answer}</p>
        <input
          onChange={e => {
            this.setState({ number1: e.target.value });
          }}
          placeholder={"number1"}
        />
        <input
          onChange={e => {
            /* setting the state */
            this.setState({ number2: e.target.value });
          }}
          placeholder={"number2"}
        />

        <button onClick={() => this.calculate("div")}>Divide </button>
        <button onClick={() => this.calculate("mul")}>Multiply</button>
        <button onClick={() => this.calculate("add")}>Addition</button>
        <button onClick={() => this.calculate("sub")}>Subtract</button>
      </div>
    );
  }
}
