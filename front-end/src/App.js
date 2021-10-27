<<<<<<< HEAD
import ProfileBar from "./components/ProfileBar/ProfileBar";
import UpdateChallenge from "./components/UpdaterChallenge/UpdateChallenge"
import React from "react";

function App() {
  return (
    <div id="screen">
      <p>
        <ProfileBar/>
      </p>
      <p>
        <UpdateChallenge/>
      </p>
    </div>
    
  );
}

export default App;
=======
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
>>>>>>> 1b7e8dffb98ea5e0af09d94c9194668fd792d425
