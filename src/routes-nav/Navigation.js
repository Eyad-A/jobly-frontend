import React from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * Nav bar that shows up on top of every page
 */

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/companies">
          companies
        </NavLink>
        <NavLink to="/jobs">
          Jobs
        </NavLink>
        <NavLink to="/profile">
          profile
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;