import React, { useState, useEffect } from "react";
import "./App.css";
import Feed from "./components/feed/feed"

function App() {

  return (
    <div id="screen">
      <div id="notification">
        
      </div>
      <Feed />
    </div>
  );
}

export default App;
