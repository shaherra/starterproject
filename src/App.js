import React, { Component } from "react";
import NavBar from "./components/navBar";
import Container from "./components/container";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        {/* import component */}
        <NavBar />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
