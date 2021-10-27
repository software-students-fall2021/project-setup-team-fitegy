import React from "react";
import './App.css';
import CreateChallenge from "./components/CreateChallenge/createChallenge.js";
import ChallengeManager from "./components/ChallengeManager/ChallengeManager";
import CreateNew from "./components/CreateNew/createNew.js";
import ProfileBar from "./components/ProfileBar/ProfileBar.js";


function App() {
  return (
    <div id="screen">
      <CreateNew /> 
      <CreateChallenge /> 
      <ProfileBar />
      <ChallengeManager/>
    </div>
  
  );
}
export default App;
