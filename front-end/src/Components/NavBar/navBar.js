import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./navBar.css";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';

const NavBar= () =>{
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

 
  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 4}} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
        <nav>
          
          <BottomNavigationAction component={Link} to="/feed" label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction component={Link} to="/challenge-manager" label="Challenge Manager" icon={<FilterHdrIcon />} />
          <BottomNavigationAction component={Link} to="/createNew" label="Post" icon={<AddCircleOutlineIcon />} />
          <BottomNavigationAction component={Link} to="/profile"label="Profile" icon={<AccountCircleIcon />} />
        </nav>

        </BottomNavigation>
      </Paper>
    </Box>
  );
}
  export default NavBar;