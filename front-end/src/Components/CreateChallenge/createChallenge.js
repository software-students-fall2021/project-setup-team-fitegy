import React, { Component } from "react";
import "./createChallenge.css"
import { BrowserRouter as Link } from "react-router-dom";


const CreateChallenge = () =>{
    const [name, setName] = React.useState("");
    const [topic, setTopic] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [date, setDate] = React.useState("");
    const [isPrivate, setPrivate] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState([]);
	const [isFilePicked, setIsFilePicked] = React.useState(false);
    const onDrop = e => {
        // setPictures([...pictures, picture]);
        // const file = e;
        if (e.target.files && e.target.files.length > 0 && e.size > 52428800)
        alert("File size exceeds the limit!" );
        else{
            setSelectedFile(e.target.files[0]);
            setIsFilePicked(true);
        }
    };
    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(`
        Challenge Name: ${name}
        Description: ${description}
        Topic: ${topic}
        Dates: ${date}
        Set Private: ${isPrivate}
        File: ${selectedFile.name}
        `);

        fetch(`${process.env.REACT_APP_IP}:3001/api/createChallenge`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                description: description,
                topic: topic,
                date: date,
                private: isPrivate
            }),
            })
            .then(response => response.json())
            .then(data => console.log(data.text));
    }

  return (
    <div id="Challenge" style={{ backgroundImage: "url('/images/background.png')" }}>
        <h1> Challenge Manager </h1>
        <form method="POST" action='http://localhost:3001/api/feed' onSubmit={handleSubmit}>
            <h1>Create Challenge</h1>
            <button id= "cancel" component={Link} to="/createNew"> Cancel</button>
            <button id="post_button">Post</button>
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
                Photo Selected:
                        <input
                        name="selectedFile"
                        type="file"
                        onChange={onDrop}
                        />
                        {isFilePicked ? (
				        <div>
					        <p>Filename: {selectedFile.name}</p>
					        <p>Filetype: {selectedFile.type}</p>
					        <p>Size in bytes: {selectedFile.size}</p>
					        <p>lastModifiedDate:{' '}{selectedFile.lastModifiedDate.toLocaleDateString()}</p>
				        </div>
			            ) : (
				            <p>Select a file to show details</p>
			            )}
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
