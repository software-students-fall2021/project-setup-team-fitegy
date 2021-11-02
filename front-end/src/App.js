import "./App.css";
import CreateNew from "./Components/CreateNew/createNew.js";
import ProfileBar from "./Components/ProfileBar/ProfileBar.js";
import React, { useState, useEffect } from "react";
import Feed from "./Components/feed/feed";
import CreateChallenge from "./Components/CreateChallenge/createChallenge.js";
import ChallengeManager from "./Components/ChallengeManager/ChallengeManager";
import CreatePost from "./Components/CreatePost/CreatePost.js";
import SelectPhoto from "./Components/SelectPhoto/SelectPhoto.js";
import LogIn from "./Components/LogIn/logIn";
import Notification_page from "./Components/notification_page/notification_page";

function App() {
  return (
    <div id="screen">
      <LogIn/>
      <Feed/>
      <Notification_page/>
      <ProfileBar />
      <CreateChallenge />
      <ChallengeManager />
      <CreatePost />
      <SelectPhoto />
      
    </div>
  );
}
export default App;
