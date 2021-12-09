import "./Post.css"
import React, {useState} from "react";
import { Avatar} from '@mui/material';
import Divider from '@mui/material/Divider';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}



const Post = (props) => {
    var liked = false;
    const [count, setCount] = useState(props.likes); // load all the previous likes from db
    const handleClick = e => {
      if(liked == false){
        setCount(count + 1);
        liked = true;
      }
      console.log("liked!");

      // send data to the back
      fetch(`${process.env.REACT_APP_IP}:3001/api/liked`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          content: props.content,
          id: props.id
          }),
        })
        .then(response => response.json())
        .then(data => console.log(data.text));
    };



    return (
      <div id="post">
          <div id="top_profile">
          <Avatar id="avatar" {...stringAvatar(props.name)} />
            <div id="details">
              <p className="name"> {props.name}</p>
              <p className="location"> {props.location}</p>
            </div>
          </div>

          <Divider id="divider" variant="middle" />

          <div id="content">
            <p> {props.content} </p>
          </div>

          <div id="bottom_bar">
            <div id="like" className="icon_container" onClick={handleClick}>
              <img id="like_icon" lassName="icon" width="20" height="20" src="/images/heart.png" />
              <span> {count} Like </span>
            </div>
            <div id="comment" className="icon_container">
              <img className="icon" width="20" height="20" src="/images/comment.png" />
              <span> Comment </span>
            </div>
            <div id="check_challenge" className="icon_container">
              <img className="icon" width="20" height="20" src="/images/light.png" />
              <span> Join Challenge </span>
            </div>
          </div>

      </div>
      
    );
  }
  
  export default Post; 