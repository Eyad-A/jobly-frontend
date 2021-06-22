import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";

/**
 * Home page
 * Shows a welcome page and a login/signup buttons
 * Routed at /Routes > Homepage 
 */

function Homepage() {

  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <div>
        <h1>Jobly</h1>
        <h5>The best job board on the internet</h5>
        {currentUser ? 
          <h3>Welcome back, {currentUser.firstName || currentUser.username}</h3>
          : (
            <p>
              <Link to="/login">
                Login 
              </Link>
              <Link to="/signup">
                Signup 
              </Link>
            </p>
          )
        }
      </div>
    </div>
  );
}

export default Homepage;