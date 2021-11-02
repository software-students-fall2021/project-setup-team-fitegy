import React, { Component } from "react";
import "./createChallenge.css"


const CreateChallenge = () =>{
    const [name, setName] = React.useState("");
    const [topic, setTopic] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [date, setDate] = React.useState("");
    const [isPrivate, setPrivate] = React.useState(false);

    const handleSubmit = (event) => {
        console.log(`
        Challenge Name: ${name}
        Description: ${description}
        Topic: ${topic}
        Dates: ${date}
        Set Private: ${isPrivate}

        `);
    
    event.preventDefault();
    }

  return (
    <div id="Challenge" style={{ backgroundImage: "url('/images/background.png')" }}>
        <form onSubmit={handleSubmit}>
            <h1>Create Challenge</h1>
            <button id= "cancel"> Cancel</button>
            <button>Post</button>
            <label>
                Challenge Name:
                <input
                name="name"
                type="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required />
            </label>
            
            <label>
                Description:
                <input
                name="description"
                type="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required />
            </label>

            <label>
            Topic:
                <input
                name="topic"
                type="topic"
                value={topic}
                onChange={e => setTopic(e.target.value)}
                required />
            </label>
            <label>
            Dates:
                <input
                name="date"
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                required />
            </label>
            <label>
            Image: 
                <img id="image" alt="Challenge Icon" src="https://picsum.photos/200?page=home" width="50" height="50"/>
            </label>
            

            <label>
            Private   
                <input
                name="Private"
                type="checkbox"
                onChange={e => setPrivate(e.target.value)}
                />
                    
            </label>

        </form>
  
    </div>
    );
}
export default CreateChallenge;