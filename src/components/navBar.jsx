import React, { Component } from "react";
import UserIntro from "./userIntro";
import Dropdown from "./dropdown";
import Sidebar from "react-sidebar";

export default class NavBar extends Component {
  state = {
    sidebarOpen: false
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "#128ea2",
          height: 50,
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        {/* <Sidebar
          sidebar={<b>Sidebar content</b>}
          open={this.state.sidebarOpen}
          styles={{ sidebar: { background: "#128ea6" } }}
        >
          <button onClick={() => this.setState({ sidebarOpen: true })}>
            Open sidebar
          </button>
        </Sidebar> */}
        <UserIntro userName="Shaherra" imgWidth={48} imgHeight={45} />
        <Dropdown name="Test" name2="Test2" name3="Test3" />
      </div>
    );
  }
}
