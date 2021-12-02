import React, { Component } from "react";
import "./LogIn.css"


const LogIn = () =>{
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event) => {
        console.log(`
        Username: ${name}
        Password: ${password}
       

        `);
    
    event.preventDefault();
    }

  return (
    <div id="Challenge" style={{ backgroundImage: "url('/images/background.png')" }}>
        <form onSubmit={handleSubmit}>
            <h1></h1>
           
            <label>
                Username:
                <input
                name="name"
                type="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required />
            </label>
            
            <label>
                Password:
                <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required />
            </label>
            <button id="login_button">Log In</button>


        </form>
  
    </div>
    );
}
export default LogIn;