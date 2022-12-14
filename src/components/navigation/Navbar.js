import React from "react";
import {
  Nav,
  NavLink,
  Bar,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./src/components/navigation/Navbar";

const Navbar = ({ cart }) => {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navbar-logo">
          <a href="/" className="navbar-logo_link">
            Home
          </a>
          <a href="/about" className="navbar-logo_link">
            About
          </a>
          <a href="/contact" className="navbar-logo_link">
            Contact
          </a>
          <a href="/cart" className="navbar-logo_link">
            Cart
          </a>
          <a href="/product" className="navbar-logo_link">
            Product List
          </a>
        </div>
      </div>

      <nav className="nav-wrapper">
        <div className="nav-header">
          <div className="nav-home">Home</div>
          <a style={{ color: "pink" }} href="/cart">
            <i className=""></i>
          </a>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
