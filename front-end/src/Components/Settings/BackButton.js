import React from "react";
import './App.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io'


function BackButton() {
    return(

        <div className='back'>
            {/* Link to go back, change to Profile Page, and change link to button */}
            <Link to="/Profile">
                <h5> <IoIosArrowBack /> </h5>
            </Link>
        </div>

    );
}

export default BackButton;