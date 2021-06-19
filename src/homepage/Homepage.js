import React from "react";
import { Link } from "react-router-dom";

/**
 * Home page
 * Shows a welcome page and a login/signup buttons
 * Routed at /Routes > Homepage 
 */

function Homepage() {
    return (
        <div>
            <h1>Jobly</h1>
            <h2>Welcome to Jobly</h2>
        </div>
    )
}

export default Homepage;