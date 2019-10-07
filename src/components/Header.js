import React, { Component } from "react";
import logo from "./img/lf.svg";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <main className="header">
        <div className="logoheader">
          <img src={logo} className="logo" alt="" />
          <h2>
            <span>LearnFactory</span> Scores
          </h2>
        </div>

        <div className="list">
          <NavLink> Predict </NavLink>
          <NavLink to="/contact"> Contact </NavLink>
          <NavLink to="/about"> About </NavLink>
        </div>
      </main>
    );
  }
}
export default Header;
