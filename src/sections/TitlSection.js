import React, { Component } from "react";
import data from "../data.json";
import FullPage from "../components/fullpage";
import { SocialIcon } from "react-social-icons";
import "./Titlsection.css";

import { Link, Element } from "react-scroll";

class SectionFirst extends Component {
  render() {
    return (
      <div>
        <FullPage className="first">
          <div>
            <div>
              <h1 className="tSize1">{data.title1}</h1>
              <h2 className="tSize2">{data.title2}</h2>
            </div>
            <div className="links">
              {Object.keys(data.links).map((keys) => {
                return (
                  <div className="icons">
                    <SocialIcon url={data.links[keys]} />
                  </div>
                );
              })}
            </div>
          </div>
        </FullPage>

        <Element name="test1" className="element"></Element>
      </div>
    );
  }
}

export default SectionFirst;
