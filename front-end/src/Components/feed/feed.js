import React, {useState, useEffect} from "react";
import "./feed.css"
import Post from "../Post/Post.js"

const Feed = () => {

    const [content, setContent]  = useState([]);
    useEffect(()=>{
      fetch('http://localhost:3001/api/feed')
        .then(res => res.json())
        .then(data => setContent(data));
    }, [])
    
   const userPosts = content.map((post)=>{
     return <Post name={post.name} location={post.location} content={post.text}/>
   })
    return (
      <div id="feed" style={{ backgroundImage: "url('/images/background.png')" }}>
          <div id="notification">
            <img src="/images/bell.png" />
          </div>
          {userPosts}
      </div>   
    );
  
  }
  
  export default Feed; 