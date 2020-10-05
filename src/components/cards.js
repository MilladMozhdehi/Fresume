import React, { Component } from "react";
import "./cards.css";
import data from "../data.json";

class Cards extends Component {
  render() {
    return (
      <div>
        <h3 className="tSize3">{data.section[1].title}</h3>
        <div className="wrapper">
          {data.section[1].items.map((skill) => {
            return (
              <div className="cards" >
                <div>
                  <img src={skill.content.image} />
                </div>
                <div>
                  <h4 className="tSize4">{skill.content.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cards;
