import React, { Component } from "react";
import FullPage from "../components/fullpage";
import Cards from "../components/cards";
import "./cardssection.css";

class CradsSection extends Component {
  render() {
    return (
      <FullPage className="first">
        <Cards />
      </FullPage>
    );
  }
}

export default CradsSection;
