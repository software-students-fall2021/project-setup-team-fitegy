import React from "react";
import './App.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io'


function BackButton() {
    return(

        <div className='back'>
            {/* Link to go profile page, with ArrowBack Icon */}
            <Link to="/Profile">
                <h5> <IoIosArrowBack size="2em"/> </h5>
            </Link>
        </div>

    );
}

export default BackButton;