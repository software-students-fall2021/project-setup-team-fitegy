import React from "react";
import './App.css';
import React, { useState, useEffect } from "react";
import Feed from "./temp/feed/feed"
import Notification_page from "./temp/notification_page/notification_page";
import CreateChallenge from "./temp/CreateChallenge/createChallenge.js";
import ChallengeManager from "./temp/ChallengeManager/ChallengeManager";
import CreateNew from "./temp/CreateNew/createNew.js";
import ProfileBar from "./temp/ProfileBar/ProfileBar.js";



function App() {

  return (
    <div id="screen">
      <Feed />
      <Notification_page /> 
      <CreateNew /> 
      <CreateChallenge /> 
      <ChallengeManager/>
      <ProfileBar />
    </div>
  );
}
export default App;
