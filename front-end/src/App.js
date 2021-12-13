import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import CreateNew from "./Components/CreateNew/createNew.js";
import ProfileBar from "./Components/ProfileBar/ProfileBar.js";
import Feed from "./Components/feed/feed.js";
import CreateChallenge from "./Components/CreateChallenge/createChallenge.js";
import ChallengeManager from "./Components/ChallengeManager/ChallengeManager.js";
import CreatePost from "./Components/CreatePost/CreatePost.js";
import SelectPhoto from "./Components/SelectPhoto/SelectPhoto.js";
import LogIn from "./Components/LogIn/logIn.js";
import NotificationPage from "./Components/NotificationPage/NotificationPage.js";
import { Login, Settings } from "@mui/icons-material";
import NavBar from "./Components/NavBar/navBar";
import SettingsF from "./Components/Settings/Settings.js";
import GetLocalStorage from"./Components/GetLocalStorage";
import Protected from "./Components/Protected";
import SetLocalStorage from "./Components/SetLocalStorage";

function App() {
  return (
    <Router>
      
      <NavBar />
      <div id="screen">
        <Switch>
          <Route path="/login" component={LogIn} />
          <Route path="/CreateNew" component={CreateNew} />
          <Route path="/navBar" component={NavBar} />
          <Route path="/feed" component={Feed} />
          <Route path="/notification-page" component={NotificationPage} />
          <Route path="/profile">
            <ProfileBar />
          </Route>
          <Route path="/set-local-storage" element={<SetLocalStorage />} />
          <Route path="/get-local-storage" element={<GetLocalStorage />} />
          <Route path="/protected" component={Protected} />
          <Route path="/create-challenge" component={CreateChallenge} />
          <Route path="/challenge-manager" component={ChallengeManager} />
          <Route path="/create-post" component={CreatePost} />
//           <Route path="/select-photo" component={SelectPhoto} />
          <Route path="/settings" component={SettingsF} />
          <Route path="/"><Redirect to="/login" /></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
