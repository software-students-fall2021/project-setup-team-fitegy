import React from "react";
import { Box, Button, Card } from "@mui/material";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ShieldIcon from "@mui/icons-material/Shield";

const Challenge = (props) => {
  const [toggle, setToggle] = useState(false);

  const triggerToggle = () => {
    setToggle(!toggle);

    fetch("http://localhost:3001/api/joined", {
      method: "POST",
      headers: {
        "Content-type": "application/string",
      },
      body: "I'm joing the challenge!",
    }).then((result) => {
      console.log(result.status);
    });
  };

  return (
    <Card
      sx={{
        minHeight: 250,
        minWidth: 160,
        mt: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "left",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "grid",
            flexDirection: "column",
            justifyContent: "center",
            gridTemplateRows: "repeat(1, 1fr)",
          }}
        >
          <ShieldIcon />
          <Box sx={{ fontWeight: "bold", mt: 1 }}>{props.title}</Box>
          <Box
            sx={{
              gridTemplateColumns: "repeat(2, 1fr)",
              mt: 1,
            }}
          >
            <div sx={{ fontSize: "small" }}>
              <DirectionsBikeIcon />
            </div>
            <div sx={{ fontSize: "small" }}>
              <EmojiEventsIcon />
            </div>
          </Box>
          <Box sx={{ fontSize: 10, my: 1, height: 15 }}>{props.description}</Box>
          <Box sx={{ fontSize: 10, mt: 1 }}>{props.date}</Box>
        </Box>

        <Button
          onClick={triggerToggle}
          color="warning"
          variant={toggle ? "outlined" : "contained"}
          sx={{ width: "90%", marginLeft: "auto" }}
        >
          {toggle ? <CheckIcon /> : <>Join</>}
        </Button>
      </Box>
    </Card>
  );
};

export default Challenge;
