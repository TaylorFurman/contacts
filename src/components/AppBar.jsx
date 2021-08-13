import React from 'react';
import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function NavigationBar(props){
  return(
    <AppBar position = 'relative'>
    <Toolbar>
    <Typography variant='h4' color='inherit' noWrap>
      Contact List
    </Typography>
    <Link to="/">Home</Link>
    <Link to="/add">Add Contact</Link>
    <Link to="/delete/:">Delete</Link>
    </Toolbar>
  </AppBar>
  )
}

export default NavigationBar;