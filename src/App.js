import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";
import JoblyApi from "./api/api";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
