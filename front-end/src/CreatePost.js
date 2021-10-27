import React, { useState, useEffect } from 'react'
import './CreatePost.css'
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
// import background from "./background.png";
// style={{ backgroundImage: `url(${background})` }}
const CreatePost= (props) => {
    return (
      <div className="CreatePost" >
        <h1>Post Title</h1>
        <input
          type="text"
          className={'input-style'}
          placeholder="type here"
          value={props.value}
          onChange={props.handleChange}
        />
        <h1>Content</h1>
        <input
          type="text"
          className={'input-style'}
          placeholder="type here"
          value={props.value}
          onChange={props.handleChange}
        />
        {/* <h1>Visibility: Public</h1> */}
        <section className="button">
        <button onClick={selectPhoto}>Select a Photo</button>
        </section>
        <section className="button2">
        <button onClick={send}>Send</button>
        </section>
      </div>
    )
  }
  function selectPhoto() {
    alert('Should jump to select a photo page!');
  }
  function send() {
    alert('Should send the post to feed!');
  }
  // const MyInput = () => {
  //   const [value, setValue] = useState('');
  //   const onChange = (evt) => setValue(evt.target.value);
  
  //   return <input value={value} onChange={onChange} />;
  // };
// make this function available to be imported into another module
export default CreatePost
