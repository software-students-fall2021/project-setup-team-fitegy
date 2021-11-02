import React from "react";
import "./notification_page.css"
import Notif from "../Notification/Notif"

const NotificationPage = () => {
    return (
      <div id="notification_page" style={{ backgroundImage: "url('/images/background.png')" }}>
          <Notif name="Henry Goulding" content="Henry Goulding liked your post: Daily challenge completed with..."/>
          <Notif name="Lady Gaga" content="Lady Gaga commented: keep up the good work💪"/>
          <Notif name="Ariana Grande" content="Ariana liked your post: Daily challenge completed with..."/>
          <Notif name="Beyonce" content="Beyonce commented: very nice job! Can I join you guys?"/>
          <Notif name="Megan Fox" content="Megan Fox commented: I tried your challenge last time and it was amazing! But now CAN YOU do my challenge?😈 "/>
          <Notif name="Corey Dubin" content="Corey Dubin liked your post: Daily challenge completed with... "/>
          <Notif name="Alex Ko" content="Alex Ko commented: amazing!"/>
          <Notif name="Christian Kovacs" content="Christian Kovacs started following you!"/>
          <Notif name="Ina Youn" content="Ina Youn started following you!"/>
          <Notif name="Salma Hashem" content="Salma Hashem commented: Wow that was a killer workout! Mind if I copy yours?"/>
          <Notif name="Anona Yang" content="Anano Yang liked your post: Daily challenge completed with..."/>
          <Notif name="Amos Bloomberg" content="Amos Bloomberg started following you."/>
      </div>   
    );
  }
  
  export default NotificationPage; 