import React from "react";
import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";
const App = () => (
  <div className="app">
    <h1>Choose Your favourite GIF</h1>
    <div className="main-container">
      <Random />
      <Tag />
    </div>
  </div>
);

export default App;
