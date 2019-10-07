import React, { Component } from "react";
import logo from "./img/lf.svg";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <main className="header">
        <div className="logoheader">
          <NavLink to='/'  className='headerNav' exact={true}>
            <img src={logo} className="logo" alt="" />
          </NavLink>
          <NavLink to="/" className='headerNav' exact={true}>
            <h2>
              <span>LearnFactory</span> Scores
            </h2>
          </NavLink>
        </div>

        <div className="list">
          <NavLink > Predict </NavLink>
          <NavLink to="/contact" > Contact </NavLink>
          <NavLink to="/about" ActiveClassName='active'> About </NavLink>
        </div>
      </main>
    );
  }
}
export default Header;
