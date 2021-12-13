import * as React from "react";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext } from "@mui/lab";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";
import { Container, CardMedia } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "./ProfileBar.css";
import { BsGear } from 'react-icons/bs';
import Challenge from "../ChallengeManager/components/Challenge.js";
import Post from "../Post/Post.js";;


const ProfileBar = () =>{
  let userName = 'Alex Ko'
  const [value, setValue] = useState("1");
  const [content, setContent]  = useState([{"_id":"61ad5a3acb0e67062265765a","ongoing":2,"done":8,"points":57}]);
  const [myPosts, setPost] = useState([{"name":"Veriee Burnhams","location":"Alaska","text":"Doing my morning yoga session created by me and coach Lin. Join us for a spiritual and healthy start of your day!🤍🔮🐈🌫","id":"6199862dd86253d2756e0fc6","likes":42}]);
  const [challenge, setChallenges] = useState([{"title":"Christmas Yoga","description":"This Xmas let's get fit with the family! ","date":"2021-12-25"}]);
// initial posts. later fetches data from MongoDB

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_IP}:3001/api/profile`)
      .then(res => res.json())
      .then(data => setContent(data))
  }, [])
  
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_IP}:3001/api/feed`)
        .then((res) => res.json())
        .then((data) => setPost(data))
  }, [])

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_IP}:3001/api/challenge`)
        .then((res) => res.json())
        .then((data) => setChallenges(data))
  }, [])
  
  const getChallenges = challenge.map((challenge) => {
    return (
      <Challenge
       key={challenge.name}
       title={challenge.title}
       description={challenge.description}
        date={challenge.date}
      />
    );
  });

  const myPost = [];
  for (var i = 0; i<myPosts.length; i++){
    if (myPosts[i].name == userName){
      myPost.push(myPosts[i]);
    }
  }
  const userPosts = myPost.map((post)=>{
    return <Post name={post.name} location={post.location} content={post.text} id = {post.id} likes = {post.likes}/>
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      id="screen"
      style={{ height: 844, backgroundImage: "url('/images/background.png')" }}
    >
        <Container id="profilebar" sx={{ width: 390, height: 422}}> 
        
        <br></br>
        <br></br>
        <h1> Profile </h1>
        


        <br></br>
        <img src={"https://i.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY"} alt="Profile Pic" id="pfp" width={50} height={50} />
        <br></br>

       <br></br>
        <body id="container">
                  
          <p> Alex Ko <br></br> Manhattan, NYC</p>  

          <hr id="hr"></hr>

          <p>I am a beginner at the gym, and I am a bit shy at the gym. I'm looking for some new gym buddies at NYU</p>

        </body>
  

      </Container>
      <Container id="profilebar" sx={{ width: 390, height: 422 }}>
        <TabContext value={value}>
          <Box
            id="tabbar"
            sx={{ width: 390, borderBottom: 1, borderColor: "divider" }}
            
          >
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="white"
              indicatorColor="warning"
              centered
              
            >
              <Tab label="Posts" value="1" color="warning" />
              <Tab label="Stats" value="2" />
              <Tab label="My Challenges" value="3" />
            
              
            </Tabs>
            {/* Button to Settings Page */}
            <Link to="/Settings">
                <h5> <BsGear size="1.5em"/> </h5>
              </Link>  
          </Box>
          <TabPanel value="1">
            <Box id="posts" sx={{ width: 390 }}>
              <Container>
                {userPosts}
              </Container>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Stack
              id="stats"
              spacing={3}
              direction="column"
              sx={{ width: 390 }}
            >

            <Button variant="contained" color="warning">
                "You have done {content[0].done} challenges this month"
            </Button>
            <Button variant="contained" color="warning">
              "You have {content[0].ongoing} ongoing challenges"
            </Button>
            <Button variant="contained" color="warning">
              "You have earned {content[0].points} points this month"
            </Button>     
      
              
            </Stack>
          </TabPanel>

          <TabPanel value="3">
            <Container
              id="challenges"
              sx={{
                width: 390,
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 1,
              }}
            >
              {getChallenges}
            </Container>
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
}

export default ProfileBar;
