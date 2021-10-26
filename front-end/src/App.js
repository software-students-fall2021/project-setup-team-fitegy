import React, { useState, useEffect } from "react";
import "./App.css";
import Feed from "./components/feed/feed"
import Notification_page from "./components/notification_page/notification_page";

function App() {

  return (
    <div id="screen">
      <Feed />
      <Notification_page /> 
    </div>
  );
}

export default App;
