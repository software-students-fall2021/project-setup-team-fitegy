import React from 'react'
import "./App.css"

function Pfp(){ 
    
    return(
        <div className = 'pfp'>
            {/* Currently links to image from picsum, change depending on user*/}
            <img src={"https://picsum.photos/id/237/200/300"} alt="Profile Pic" width={50} height={50} />
        </div>
    )
}

export default Pfp;