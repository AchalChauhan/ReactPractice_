import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "../assets/Logo.png";
import "../Styles/navbar.css";

export class NavBar extends Component {
  static propTypes = {};

  render() {
    return (
      <nav className="navbar-custom">
        <a href="" className="navbar-Logo">
          <img src={Logo} alt="Logo" className="navbar-Logo" />
        </a>
      </nav>
    );
  }
}

export default NavBar;
