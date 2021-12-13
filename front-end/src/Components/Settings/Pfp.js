import React from 'react'
import "./App.css"

function Pfp(){ 
    
    return(
        <div className = 'pfp'>
            {/* Currently links to image from picsum, change depending on user*/}
            <img src={"https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY"} alt="Profile Pic" width={50} height={50} />
        </div>
    )
}

export default Pfp;