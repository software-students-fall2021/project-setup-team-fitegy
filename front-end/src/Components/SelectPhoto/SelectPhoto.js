import React, { useState, useEffect } from 'react'
import './SelectPhoto.css'
import ImageUploader from "react-images-upload";
const multer = require("multer");
// const SelectPhoto= (props) => {
//   const [pictures, setPictures] = useState([]);

  // const onDrop = picture => {
  //   setPictures([...pictures, picture]);
  // };
  //   return (
  //     <div className="SelectPhoto" style={{ backgroundImage: "url('/images/background.png')" }}>
  //         {/* <h1>All Photos</h1>
  //       <button onClick={selectPhoto}>Select</button> */}
  //   <ImageUploader 
  //     {...props}
  //     withIcon={true}
  //     onChange={onDrop}
  //     imgExtension={[".jpg", ".gif", ".png", ".gif"]}
  //     maxFileSize={5242880}
  //     />
  // </div>
  //   )
  // }

  // const SelectPhoto =(props) => {

  // }





const SelectPhoto = (props) => {
    // const [title, setName] = React.useState("");
    // const [content, setDescription] = React.useState("");
    // const [isPrivate, setPrivate] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState([]);
	  const [isFilePicked, setIsFilePicked] = React.useState(false);
    // const fileInput = useRef(null)
    const onDrop = e => {
        if (e.target.files && e.target.files.length > 0 && e.size > 52428800)
        alert("File size exceeds the limit!" );
        else{
            setSelectedFile(e.target.files[0]);
            setIsFilePicked(true);
        }
    };
    const removeSelectedFile = () => {
        setSelectedFile();
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        console.log(`
        File: ${selectedFile.name}
        `);
		  formData.append('File', selectedFile);

		fetch(
			'http://localhost:3001/api/uploadPhoto',
			{
				method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
				body: formData,
			}
		)
			.then((response) => response.json())
            .then(data => console.log(data.text));
    }  
    return (
      <div id="SelectPhoto" style={{ backgroundImage: "url('/images/background.png')" }}>
          <form action="/uploadPhoto" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
              <h1>Select Photo</h1>
              <button id= "cancel"> Cancel</button>
              <button id="post_b">Choose</button>
              {/* <label>
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
              </label> */}
              
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
              
  
              {/* <label>
              Private   
                  <input
                  name="Private"
                  type="checkbox"
                  onChange={e => setPrivate(e.target.value)}
                  />
                      
              </label> */}
  
          </form>
    
      </div>
      );
    
};
export default SelectPhoto;



