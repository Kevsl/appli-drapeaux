import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "")}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={(navData) => (navData.isActive ? "active" : "")}
        to="/about"
      >
        About
      </NavLink>
    </div>
  );
};

export default Navigation;
