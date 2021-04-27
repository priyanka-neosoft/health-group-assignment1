import React, { FC } from "react";
import { NavLink } from "react-router-dom";

/**
 * @description Navbar Component.
 * used for showing navigation in every page.
 */
const Navbar: FC = () => {
  return (
    <ul className="navBarCustom">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">
          Employee Details
        </NavLink>
      </li>
      <span></span>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/count">
          Counter
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
