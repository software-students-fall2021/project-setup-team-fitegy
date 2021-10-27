import React from "react";
import "./feed.css"
import Post from "../Post/Post.js"

const Feed = () => {
    return (
      <div id="feed" style={{ backgroundImage: "url('/images/background.png')" }}>
          <div id="notification">
            <img src="/images/bell.png" />
          </div>
          <Post name="Henry Goulding" location="Brooklyn" content="Brooklyn Halloween Challenge: every sunday morning we will be doing a 5k vapire run from Brooklyn to Manhattan!"/>
          <Post name="James Bond" location="Manhattan" content="Update: 2 weeks into the Kyrie Irving Leg Day Challenge. Feeling stronger!!💪"/>
          <Post name="Ariana Grande" location="California" content="Doing my morning yoga session created by me and coach Lin. J2oin us for a spiritual and healthy start of your day!🤍🔮🐈🌫"/>
      </div>   
    );
  }
  
  export default Feed; 