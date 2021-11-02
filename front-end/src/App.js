import "./App.css";
import React, { useState, useEffect } from "react";

import CreateNew from "./Components/CreateNew/createNew.js";
import ProfileBar from "./Components/ProfileBar/ProfileBar.js";
import Feed from "./Components/feed/feed.js";
import CreateChallenge from "./Components/CreateChallenge/createChallenge.js";
import ChallengeManager from "./Components/ChallengeManager/ChallengeManager.js";
import CreatePost from "./Components/CreatePost/CreatePost.js";
import SelectPhoto from "./Components/SelectPhoto/SelectPhoto.js";
import LogIn from "./Components/LogIn/logIn.js";
import NotificationPage from "./Components/NotificationPage/NotificationPage.js";

function App() {
  return (
    <div id="screen">
      <LogIn/>
      <Feed/>
      <NotificationPage/>
      <ProfileBar />
      <CreateChallenge />
      <ChallengeManager />
      <CreatePost />
      <SelectPhoto />
    </div>
  );
}
export default App;
