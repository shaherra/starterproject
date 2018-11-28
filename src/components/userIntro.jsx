import React, { Component } from "react";

export default class UserIntro extends Component {
  render() {
    return (
      <div
        style={{
          padding: 5,
          display: "flex",
          flexDirection: "space-between",
          alignItems: "center"
        }}
      >
        <img
          src={
            "http://profilepicturesdp.com/wp-content/uploads/2018/06/avatar-profile-picture-girl-4.png"
          }
          width={this.props.imgWidth}
          height={this.props.imgHeight}
        />
        <h3>Hello {this.props.userName}</h3>
      </div>
    );
  }
}
