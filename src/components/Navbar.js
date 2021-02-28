import React from "react";
import "../styles/Navbar.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Super Store</h1>
      <ul className="buttons">
        <li className="button">
          <NavLink to="/" activeClassName="nav-selected" exact={true}>
            Home
          </NavLink>
        </li>
        <li className="button">
          <NavLink to="/deals" activeClassName="nav-selected">
            Deals
          </NavLink>
        </li>
        <li className="button">
          <NavLink to="/cart" activeClassName="nav-selected">
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
