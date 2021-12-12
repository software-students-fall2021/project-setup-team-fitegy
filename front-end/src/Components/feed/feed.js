import React, { useState, useEffect } from "react";
import "./feed.css";
import Post from "../Post/Post.js";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { BrowserRouter as Link } from "react-router-dom";

const Feed = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_IP}:3001/api/feed`)
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  const userPosts = content.map((post) => {
    return (
      <Post
        name={post.name}
        location={post.location}
        content={post.text}
        id={post.id}
        likes={post.likes}
      />
    );
  });

  return (
    <div
      id="feed"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundRepeat: "repeat-y",
      }}
    >
      <div id="notification">
        <NotificationsNoneIcon />
      </div>
      {userPosts}
    </div>
  );
};

export default Feed;
