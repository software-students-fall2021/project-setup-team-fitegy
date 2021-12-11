import React from 'react';
import './App.css';

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
        alert("Invalid Passwords")
    }
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
             
                <p><a href="http://www.google.com"> Blocked Users</a></p>
            </body>

    
        </div>

    );
}

export default Profile;