import React from "react";
import "./createNew.css"
import IconButton from '@mui/material/IconButton';
import { AddOutlined, CreateOutlined } from '@mui/icons-material';


const CreateNew = () =>{
   return(
    <div id="createNew" style={{ backgroundImage: "url('/images/background.png')" }}>
        <h1>Create a new...</h1>
            <div>
                <IconButton aria-label= "Create a Challenge" color="primary" style={{ width: 75, height: 75 }}>
                    <CreateOutlined />
                </IconButton>
                <h2>Challenge</h2>
                <p>Create a new challenge</p>
            </div>
            
            <div>
                <IconButton id= "button" aria-label= "Create a Post" color= "primary" style={{ width: 75, height: 75 }} >
                    <AddOutlined />
                </IconButton>
                <h2>Post</h2>
                <p>Post fitness updates or videos</p>
            </div>
            
            <p id="message"> Share your story with the Fitegy community by posting images or videos.</p>
    </div>
   ) 
}

export default CreateNew;