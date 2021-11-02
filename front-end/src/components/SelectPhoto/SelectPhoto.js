import React, { useState, useEffect } from 'react'
import './SelectPhoto.css'

const SelectPhoto= (props) => {
    return (
      <div className="SelectPhoto">
          <h1>All Photos</h1>
        <section className="select">
        </section>
        <button onClick={selectPhoto}>Select</button>
      </div>
    )
  }
  function selectPhoto() {
    alert('Should jump to select a photo page!');
  }

 
// make this function available to be imported into another module
export default SelectPhoto
