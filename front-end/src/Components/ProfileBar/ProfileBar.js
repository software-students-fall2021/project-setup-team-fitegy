import * as React from "react";
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
import Post from "../PostforProfile/PostforProfile.js";
import Challenge from "../ChallengeforProfile/ChallengeforProfile";
import { BsGear } from 'react-icons/bs'

const challenges = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
const getChallenges = challenges.map((challenge) => {
  return <Challenge key={challenge.name}>{challenge}</Challenge>;
});

function ProfileBar() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      id="screen"
      style={{ height: 844, backgroundImage: "url('/images/background.png')" }}
    >

      {/* Container for the Top Half of Page With Profile Info*/}
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

      {/* Container for Bottom Half with Tabs and Icon */}
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
                <Post
                  name="Alex Ko"
                  location="Manhattan"
                  content="Brooklyn Halloween Challenge: every sunday we will be doing a 5k vampire run from Brooklyn to Manhattan!"
                />
                <Post
                  name="Alex Ko"
                  location="Manhattan"
                  content="Update: 2 weeks into the Kyrie Irving Leg Day Challenge. Feeling stronger!!💪"
                />
                <Post
                  name="Alex Ko"
                  location="Manhattan"
                  content="Doing my morning yoga session created by me and coach Lin. Join us for a spiritual start to your day!🤍🔮🐈🌫"
                />
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
                You have done 23 challenges this month
              </Button>
              <Button variant="contained" color="warning">
                You have 2 ongoing challenges
              </Button>
              <Button variant="contained" color="warning">
                You have earned 430 points this month
              </Button>
            </Stack>
          </TabPanel>

          <TabPanel value="3">
            <Container
              id="challenges"
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 0,
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
