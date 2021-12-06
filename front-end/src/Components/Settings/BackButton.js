import React from "react";
import './App.css';

function Back(){
    alert("Test Back")
}

function BackButton() {
    return(

        <div className='back'>
            {/* Link to go back, change to Profile Page, and change link to button */}
            <button onClick={Back}> Back </button>
        </div>

    );
}

export default BackButton;