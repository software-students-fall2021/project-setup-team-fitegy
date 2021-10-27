import "./App.css";
import CreateNew from "./Components/CreateNew/createNew.js";
import ProfileBar from "./Components/ProfileBar/ProfileBar.js";
import React, { useState, useEffect } from "react";
import Feed from "./Components/feed/feed";
import NotificationPage from "./Components/notification_page/notification_page";
import CreateChallenge from "./Components/CreateChallenge/createChallenge.js";
import ChallengeManager from "./Components/ChallengeManager/ChallengeManager";
import CreatePost from "./Components/CreatePost/CreatePost.js";
import SelectPhoto from "./Components/SelectPhoto/SelectPhoto.js";

function App() {
  return (
    <div id="screen">
      <Feed id="page1" />
      <NotificationPage id="page2" />
      <CreateNew />
      <CreateChallenge />
      <ProfileBar />
      <ChallengeManager />
      <CreatePost />
      <SelectPhoto />
    </div>
  );
}
export default App;
