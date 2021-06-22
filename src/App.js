import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";
import jwt from "jsonwebtoken";
import JoblyApi from "./api/api";
import UserContext from "./auth/UserContext";
import useLocalStorage from "./hooks/userLocalStorage";
import LoadingSpinner from "./common/LoadingSpinner";

export const TOKEN_LOCAL_STORAGE_ID = "jobly-token";

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_LOCAL_STORAGE_ID);
  const [infoLoaded, setInfoLoaded] = useState(false);

  // Load the user info from the API 
  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("Problem with the loadUserInfo function", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }[token]);

  // Logout function 
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  // Signup function 
  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return {
        success: true
      };
    } catch (err) {
      console.error("Problem with the signup function", err);
      return {
        success: false, err
      };
    }
  }

  // Login function 
  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return {
        success: true
      };
    } catch (err) {
      console.error("Problem with the login function", err);
      return {
        success: false, err
      };
    }
  }

  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div>
          <Navigation logout={logout} />
          <Routes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
