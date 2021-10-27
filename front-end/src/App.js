import React from "react";
import './App.css';
import CreateChallenge from "./Components/CreateChallenge/createChallenge.js";
import ChallengeManager from "./components/ChallengeManager/ChallengeManager";

import CreateNew from "./Components/CreateNew/createNew.js";


function App() {
  return (
    <>
      <CreateNew /> 
      <CreateChallenge /> 
      <ChallengeManager />
    </>
  );
}
export default App;
