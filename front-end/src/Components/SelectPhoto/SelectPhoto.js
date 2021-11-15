import React, { useState, useEffect } from 'react'
import './SelectPhoto.css'
import ImageUploader from "react-images-upload";

const SelectPhoto= (props) => {
  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };
    return (
      <div className="SelectPhoto" style={{ backgroundImage: "url('/images/background.png')" }}>
          {/* <h1>All Photos</h1>
        <button onClick={selectPhoto}>Select</button> */}
    <ImageUploader 
      {...props}
      withIcon={true}
      onChange={onDrop}
      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      maxFileSize={5242880}
      />
  </div>
    )
  }
//   function selectPhoto() {
//     alert('Should jump to select a photo page!');
//   }

export default SelectPhoto 
