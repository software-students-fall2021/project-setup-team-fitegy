import React, {useState, useEffect} from "react";
import "./notification_page.css"
import Notif from "../Notification/Notif"

const NotificationPage = () => {
  const [content, setContent]  = useState([]);
    useEffect(()=>{
      fetch(`${process.env.REACT_APP_IP}:3001/api/notifications`)
        .then(res => res.json())
        .then(data => setContent(data));
    }, [])
    const notifications = content.map((notif)=>{
      return <Notif name={notif.name} content={notif.text}/>
    })
    return (
      <div id="notification_page" style={{ backgroundImage: "url('/images/background.png')", backgroundRepeat: "repeat-y"}}>
         {notifications}
      </div>   
    );
  }
  
  export default NotificationPage; 