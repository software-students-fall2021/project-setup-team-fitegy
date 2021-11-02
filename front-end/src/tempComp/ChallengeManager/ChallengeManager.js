import * as React from "react";
import Card from "@mui/material/Card";
import { Container, CardMedia } from "@mui/material";

import Background from "../../images/background.png";

import Challenge from "./components/Challenge";

const challenges = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
const getChallenges = challenges.map((challenge) => {
  return <Challenge key={challenge.name}>{challenge}</Challenge>;
});

const ChallengeManager = () => {
  return (
    <>
      <CardMedia component="img" image={Background} height={0} />
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
        }}
      >
        {getChallenges}
      </Container>
    </>
  );
};

export default ChallengeManager;
