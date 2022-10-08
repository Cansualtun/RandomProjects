import React from "react";
import { Link } from "react-router-dom";
import logo from "../logos.svg";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cocktail db logo" className="logo" />
        </Link>
      </div>
    </nav>
  );
}
