import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';
import Card from "@mui/material/Card";
import { Container, CardMedia } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import './ProfileBar.css'
import Post from '../PostforProfile/PostforProfile.js'
import Challenge from '../ChallengeforProfile/ChallengeforProfile'

const challenges = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
const getChallenges = challenges.map((challenge) => {
  return <Challenge key={challenge.name}>{challenge}</Challenge>;
});

function ProfileBar() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="screen" style={{ backgroundImage: "url('/images/background.png')" }}>
      <Container id="profilebar" sx={{width:390, height: 422 }}>
        <TabContext value={value}>
          <Box id="tabbar" sx={{ width: 390, borderBottom: 1, borderColor: 'divider'}}>
            <Tabs value={value} onChange={handleChange} textColor="white" indicatorColor="warning" centered>
              <Tab label="Posts" value="1" color="warning"/>
              <Tab label="Stats" value="2" />
              <Tab label="My Challenges" value="3" />
            </Tabs>
          </Box>
        <TabPanel value="1">
        <Box id="posts" sx={{ width: 390 }}>
        <Container>
          <Post name="James Bond" location="Manhattan" content="Brooklyn Halloween Challenge: every sunday morning we will be doing a 5k vampire run from Brooklyn to Manhattan!"/>
          <Post name="James Bond" location="Manhattan" content="Update: 2 weeks into the Kyrie Irving Leg Day Challenge. Feeling stronger!!💪"/>
          <Post name="James Bond" location="Manhattan" content="Doing my morning yoga session created by me and coach Lin. Join us for a spiritual and healthy start of your day!🤍🔮🐈🌫"/>
        </Container> 
        </Box>
        </TabPanel>
        <TabPanel value="2">
        <Stack id="stats" spacing={3} direction="column" sx={{width: 390}}>
          <Button variant="contained" color="warning">You have done 23 challenges this month</Button>
          <Button variant="contained" color="warning">You have 2 ongoing challenges</Button>
          <Button variant="contained" color="warning">You have earned 430 points this month</Button>
        </Stack>
        </TabPanel>
          
        <TabPanel value="3">
          <Container id='challenges'
            sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 0
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

export default ProfileBar