import React, { useState, useEffect } from "react";
import "./App.css";
import Feed from "./Components/feed/feed"
import Notification_page from "./Components/notification_page/notification_page";
import CreateChallenge from "./Components/CreateChallenge/createChallenge.js";
import ChallengeManager from "./Components/ChallengeManager/ChallengeManager";

import CreateNew from "./Components/CreateNew/createNew.js";


function App() {

  return (
    <div id="screen">
      <Feed />
      <Notification_page /> 
      <CreateNew /> 
      <CreateChallenge /> 
      <ChallengeManager />
    </div>
  );
}
export default App;
