import React, { useState, useEffect } from "react";
import "./CreatePost.css";


const CreatePost = (props) => {
    const [title, setName] = React.useState("");
    const [content, setDescription] = React.useState("");
    const [isPrivate, setPrivate] = React.useState(false);

    const handleSubmit = (event) => {
        console.log(`
        Post Title: ${title}
        dESsetDescription: ${content}
        Set Private: ${isPrivate}
        `);
    
    event.preventDefault();
    }
    return (
      <div id="CreatePost" style={{ backgroundImage: "url('/images/background.png')" }}>
          <form onSubmit={handleSubmit}>
              <h1>Create Post</h1>
              <button id= "cancel"> Cancel</button>
              <button id="post_b">Post</button>
              <label>
                  Title:
                  <input
                  name="title"
                  type="title"
                  value={title}
                  onChange={e => setName(e.target.value)}
                  required />
              </label>
              
              <label>
                  Content:
                  <input
                  name="content"
                  type="content"
                  value={content}
                  onChange={e => setDescription(e.target.value)}
                  required />
              </label>
  
              
              <label>
                  {/* <section className="button">
                  <button onClick={selectPhoto}>Select a Photo</button>
                  </section> */}
                  Photo Selected:
                  <img id="image" src="https://picsum.photos/200?page=home" width="100" height="100"/>
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
};
// function selectPhoto() {
//   alert("Should jump to select a photo page!");
// }
export default CreatePost;
