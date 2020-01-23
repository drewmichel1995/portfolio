import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import AboutMe from "./components/AboutMe"

function App() {
  return (
    <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={AboutMe}/>
          </div>
        </div>
        </HashRouter>
  );
}

export default App;
