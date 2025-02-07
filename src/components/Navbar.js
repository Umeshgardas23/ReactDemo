import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://th.wallhaven.cc/lg/o5/o5ov3l.jpg" alt="logo" height={25} width={25} />
      </div>
      <div className="navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/test">Test</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
