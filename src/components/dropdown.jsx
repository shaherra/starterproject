import React, { Component } from "react";

export default class Dropdown extends Component {
  state = {
    active: false
  };
  render() {
    return (
      <ul>
        <li style={{ paddingRight: 20 }}>
          <a onClick={() => this.setState({ active: true })} href="#">
            Click Me!
          </a>

          {this.state.active && (
            <ul class="dropdown">
              <li onClick={() => this.setState({ active: false })}>
                <a href="#">{this.props.name}</a>
              </li>
              <li onClick={() => this.setState({ active: false })}>
                <a href="#">{this.props.name2}</a>
              </li>
              <li onClick={() => this.setState({ active: false })}>
                <a href="#">{this.props.name3}</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    );
  }
}
