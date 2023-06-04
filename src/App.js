import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
