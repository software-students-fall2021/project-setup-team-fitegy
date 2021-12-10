import React from "react";
import './App.css';

function Back(){
    alert("Test Back")
}

function BackButton() {
    return(

        <div className='back'>
            {/* Link to go back, change to Profile Page, and change link to button */}
            <a href="/profile"> Back </a>
        </div>

    );
}

export default BackButton;