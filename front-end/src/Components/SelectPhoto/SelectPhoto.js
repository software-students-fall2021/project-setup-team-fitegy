import React, { useState, useEffect } from 'react'
import './SelectPhoto.css'
// import ImagePicker from "react-native-image-picker";
import { render } from '@testing-library/react';
const SelectPhoto= (props) => {
    return (
      <div className="SelectPhoto" style={{ backgroundImage: "url('/images/background.png')" }}>
          <h1>All Photos</h1>
        <button onClick={selectPhoto}>Select</button>
      </div>
    )
  }
  function selectPhoto() {
    alert('Should jump to select a photo page!');
  }
export default SelectPhoto
