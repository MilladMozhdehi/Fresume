import React, { Component } from "react";
import NavBar from "./components/Navbar";
import SectionFirst from "./sections/TitlSection";
import SectionSecond from "./sections/Aboutsection";
import CradsSection from "./sections/cardssection";
import "./App.css";

class App extends Component {
  state = {
    color: "black",
    backgroundColor: "tomato",
  };
  ChangeColor() {
    this.setState({
      backgroundColor:
        this.state.backgroundColor === "tomato" ? "orange" : "tomato",
      color: this.state.color === "black" ? "white" : "black",
    });
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.backgroundColor,
          color: this.state.color,
        }}
      >
        <NavBar>
          <img
            src="./images/paint.png"
            href="#"
            className="img"
            onClick={() => {
              this.ChangeColor();
            }}
          />
        </NavBar>
        <SectionFirst />
        <SectionSecond />
        <CradsSection />
      </div>
    );
  }
}

export default App;
