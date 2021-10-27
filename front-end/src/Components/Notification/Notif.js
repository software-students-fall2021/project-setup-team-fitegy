import "./Notif.css"
import React, {useState} from "react";
import { Avatar} from '@mui/material';

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
  let initials = ``;
  console.log(name.split(" "));
  if(name.split(" ").length > 1){
    initials = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
  }
  else{
    initials = `${name.split(' ')[0][0]}`;
  }

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
}



const Notif = (props) => {
    return (
      <div id="notif">
          <div id="profile_pic">
            <Avatar id="avatar" {...stringAvatar(props.name)} />
          </div>

          <div id="notif_content">
            <p> {props.content} </p>
          </div>

      </div>
      
    );
  }
  
  export default Notif; 