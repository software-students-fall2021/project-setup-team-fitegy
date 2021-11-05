import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';


function UpdateChallenge() {
  return (
    <div className="About">
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-helperText"
          label="Challenge Name"
          defaultValue="Default Value"
        />
        <TextField
          id="outlined-helperText"
          label="Description"
          defaultValue="Default Value"
        />
        <TextField
          id="outlined-helperText"
          label="Topic"
          defaultValue="Default Value"
        />
        <TextField
          id="outlined-helperText"
          label="Dates"
          defaultValue="Default Value"
        />
        <TextField
          id="outlined-helperText"
          label="Images"
          defaultValue="Default Value"
        />
        <TextField
          id="outlined-helperText"
          label="Progress"
          defaultValue="Default Value"
        />
        <TextField
          id="outlined-helperText"
          label="Reminders"
          defaultValue="Default Value"
        />
        <Stack direction="row" spacing={2}>
        <Avatar>AB</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>CD</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>EF</Avatar>
        <Fab color="primary" aria-label="add">
        <AddIcon />
        </Fab>
        </Stack>
      </div>
    </Box>
    </div>
  );
}
export default UpdateChallenge