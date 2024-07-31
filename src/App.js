// src/App.js
import React from "react";
import CountriesList from "./CountriesList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Country Flags</h1>
      <CountriesList />
    </div>
  );
};

export default App;
