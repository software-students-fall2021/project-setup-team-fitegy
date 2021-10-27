import React from "react";
import './App.css';
import CreateNew from "./components/CreateNew/createNew.js";
import ProfileBar from "./components/ProfileBar/ProfileBar.js";
import React, { useState, useEffect } from "react";
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
      <ProfileBar />
      <ChallengeManager/>
    </div>
  );
}
export default App;
