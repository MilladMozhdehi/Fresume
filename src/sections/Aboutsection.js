import React, { Component } from "react";
import data from "../data.json";
import FullPage from "../components/fullpage";
import "./Aboutsection.css";
import { Link, Element } from "react-scroll";

class SectionSecond extends Component {
  render() {
    return (
      <div className="border">
        <FullPage className="second">
          <div>
            <h3 className="tSize2">{data.section[0].title}</h3>
            <div className="p">
              <div>{data.section[0].items[0].container}</div>
              <div>{data.section[0].items[1].container}</div>
              <div>{data.section[0].items[2].container}</div>
            </div>
          </div>
        </FullPage>
        <Element name="test2" className="element"></Element>
      </div>
    );
  }
}

export default SectionSecond;
