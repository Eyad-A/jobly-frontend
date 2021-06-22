import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";

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
      <ul>
        <li>
          <NavLink to="/companies">
            companies
          </NavLink>
        </li>
        <li>
          <NavLink to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={logout}>
            Logout 
          </NavLink>
        </li>
      </ul>
    );
  }

  function loggedOutNav() {
    return (
      <ul>
        <li>
          <NavLink to="/login">
            Login 
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup">
            Signup 
          </NavLink>
        </li>        
      </ul>
    );
  }

  return (
    <nav>
      <Link to="/">
        Jobly 
      </Link>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default Navigation;