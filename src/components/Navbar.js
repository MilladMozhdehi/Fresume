import React, { Component } from "react";
import "./Navbar.css";
import { Link, Element } from "react-scroll";

class NavBar extends Component {
  render() {
    const { children } = this.props;
    return (
      <nav className="nav">
        <div>{children}</div>
        <div className="scrolls">
          <Link
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <a className="decoration1" id="a1" href="">About</a>
          </Link>
          {"   "}
          <Link
            activeClass="active"
            to="test2"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <a id="a1" href="" className="decoration2">Skills</a>
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
