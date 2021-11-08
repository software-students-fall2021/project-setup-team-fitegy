import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { Container, CardMedia } from "@mui/material";


import Challenge from "./components/Challenge";

const ChallengeManager = () => {
  const [challenge, setChallenges] = useState([])

  const getChallenges = challenge.map((challenge) => {
    return <Challenge key={challenge.name} title={challenge.title} description={challenge.description}
    date={challenge.dateRange} />;
  });

  useEffect(() => {
    fetch("http://localhost:3001/api/challenge")
    .then(res => res.json())
    .then(data => setChallenges(data))
  }, [])
  console.log(challenge)
  
  return (
    <>
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
        }}
        style={{ backgroundImage: "url('/images/background.png')"}}
      >
        {getChallenges}
      </Container>
    </>
  );
};

export default ChallengeManager;
