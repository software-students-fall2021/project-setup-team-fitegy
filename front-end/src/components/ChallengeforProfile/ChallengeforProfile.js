import React from "react";
import { Box, Button, Card } from "@mui/material";
import { useState } from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ShieldIcon from "@mui/icons-material/Shield";
import CheckIcon from "@mui/icons-material/Check";

const Challenge = (props) => {
  const [toggle, setToggle] = useState(false);

  const triggerToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Card
      sx={{
        minHeight: 225,
        mt: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "grid",
            gridTemplateRows: "repeat(1, 1fr)",
          }}
        >
          <ShieldIcon />
          <Box sx={{ fontWeight: "bold", mt: 1 }}>Challenge Title</Box>
          <Box
            sx={{
              gridTemplateColumns: "repeat(2, 1fr)",
              mt: 1,
            }}
          >
            <DirectionsBikeIcon sx={{ fontSize: "small" }} />
            <EmojiEventsIcon sx={{ fontSize: "small" }} />
          </Box>
          <Box sx={{ fontSize: 10, my: 1 }}>Challenge Description</Box>
          <Box sx={{ fontSize: 10, mt: 1, mb: 2 }}>Challenge Date Range</Box>
        </Box>

        <Button
          onClick={triggerToggle}
          color="warning"
          variant={toggle ? "outlined" : "contained"}
          sx={{ width: "100%" }}
        >
          {toggle ? <CheckIcon /> : <>Update</>}
        </Button>
      </Box>
    </Card>
  );
};

export default Challenge;