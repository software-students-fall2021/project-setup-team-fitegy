import React from "react";
import { Box, Button, Card } from "@mui/material";
import { useState } from "react";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

const Challenge = (props) => {
  const [button, setButton] = useState(false);

  return (
    <Card>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        maxWidth="sm"
      >
        <Button variant="contained" color="warning" sx={{ width: 150 }}>
          Join
        </Button>
      </Box>
    </Card>
  );
};

export default Challenge;
