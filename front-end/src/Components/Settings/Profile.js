import React from 'react';
import './App.css';
import { BrowserRouter as Link } from "react-router-dom";
import { Link as L } from 'react-router-dom'

/* Handles the change password button in the settings page.
    Asks for two passwords and if they match it sends the new
    Password to the database
*/
function pass() {
    const newPass = prompt("Enter New Password", "New Password");
    const confPass = prompt("Confirm Password", "Confirm Password");

    if (confPass === newPass){
        alert("Password Changed")
        fetch(`${process.env.REACT_APP_IP}:3001/api/settings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newPass : newPass
            }),
            })
            .then(response => response.json())
            .then(data => console.log(data.text));
    } else {
        alert("Invalid: Passwords Do Not Match")
    }
}

function logOff() {
    alert("Logged off")
}

function logOut(){
    localStorage.removeItem("token")
}


function Profile(){

    return(

        <div>
            
            <header>
                <h2>Profile</h2>
            </header>

            <body className="container">
                <p>
                    <button onClick = {pass}> Change Password </button>
                </p>
             
                <p>
                    
                    <button onClick={logOut}> <L id = "logoutButton" to="/login"> Log Off</L> </button>
        
                </p>
            </body>

    
        </div>

    );
}

export default Profile;