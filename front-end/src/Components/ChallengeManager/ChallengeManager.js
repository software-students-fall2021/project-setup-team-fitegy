import * as React from "react";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import "./ChallengeManager.css"
import Challenge from "./components/Challenge";

const ChallengeManager = () => {
  const [challenge, setChallenges] = useState([]);

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

  useEffect(() => {
    fetch("http://localhost:3001/api/challenge")
      .then((res) => res.json())
      .then((data) => setChallenges(data));
  }, []);
  return (
    

    <>
    

      <Container 
        sx={{
          width: 390,
          height: 844,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          overflow: 'scroll'
        }}
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <h1 >Challenge</h1>

        <h1 >Manager</h1>
        {getChallenges}
      </Container>
    </>
  );
};

export default ChallengeManager;
