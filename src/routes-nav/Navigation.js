import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css"

/**
 * Nav bar that shows up on top of every page
 * If the user is logged in, will show links to 
 * jobs/companies/profile. Otherwise, will show 
 * login/signup links. 
 */

function Navigation({ logout }) {

  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <div className="container-fluid">
        <Link className="navbar-brand link-dark" to="/">
          Jobly
        </Link>
        <div className="justify-content-end">
          <ul className="navbar-nav ml-auto justify-content-end">
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/" onClick={logout}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>

      </div>

    );
  }

  function loggedOutNav() {
    return (
      <div className="container-fluid">
        <Link className="navbar-brand link-dark" to="/">
          Jobly
        </Link>
        <div className="justify-content-end">
          <ul className="navbar-nav ml-auto justify-content-end">
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>
            <li className="navbar-item mr-4">
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li className="navbar-item mr-4">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="navbar-item mr-4">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    );
  }

  return (
    <nav className="Navigation navbar navbar-expand-md">
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default Navigation;