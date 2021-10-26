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