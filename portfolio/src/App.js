import React, { Component, useEffect } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Thpace from "../node_modules/thpace/thpace.js";
import PortfolioNavbar from "./components/PortfolioNavbar";

function App() {
  useEffect(() => {
    const canvas = document.getElementById("background");

    const settings = {
      color1: "#43C6AC",
      color2: "#191654"
    };

    Thpace.create(canvas, settings);
  });

  return (
    <HashRouter>
      <div id="bg">
        <canvas id="background"></canvas>
      </div>
      <div>
        <PortfolioNavbar name="Drew Michel" />
        <div className="content">
          <Route exact path="/" component={AboutMe} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
