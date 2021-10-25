import * as React from "react";
import Card from "@mui/material/Card";
import { Container } from "@mui/material";

import Challenge from "./components/Challenge";

const challenges = [<Card />];
const getChallenges = challenges.map((challenge) => {
  return <Challenge key={challenge.name}>{challenge}</Challenge>;
});

const ChallengeManager = () => {
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 2,
        minHeight: 200,
      }}
    >
      {getChallenges}
    </Container>
  );
};

export default ChallengeManager;
