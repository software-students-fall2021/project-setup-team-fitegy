import "./PostforProfile.css"
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
    const [count, setCount] = useState(0); 
    const handleClick = e => {
      setCount(count + 1);
    };
    return (
      <div id="postfp">
          <div id="top_profilefp">
          
          <Avatar id="avatarfp" {...stringAvatar(props.name)} />
            <div id="detailsfp">
              <p className="namefp"> {props.name}</p>
              <p className="locationfp"> {props.location}</p>
            </div>
          

          </div>

          <Divider id="dividerfp" variant="middle" />

          <div id="contentfp">
            <p> {props.content} </p>
          </div>

          <div id="bottom_barfp">
            <div id="likefp" className="icon_container" onClick={handleClick}>
              <img id="like_icon" className="icon" width="20" height="20" src="/images/heart.png" />
              <span> {count} Like </span>
            </div>
            <div id="commentfp" className="icon_containerfp">
              <img className="icon" width="20" height="20" src="/images/comment.png" />
              <span> Comment </span>
            </div>
            <div id="check_challengefp" className="icon_containerfp">
              <img className="iconfp" width="20" height="20" src="/images/light.png" />
              <span> See Challenge </span>
            </div>
          </div>

      </div>
      
    );
  }
  
  export default Post; 