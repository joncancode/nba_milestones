import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Sidebar from './Sidebar';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const NavBar = () => (
  //  <AppBar position="static" title="NBA Milestones"/>
  <AppBar position="static">
    <Toolbar>
      <Sidebar/>
      <Typography variant="title" color="inherit">
        NBA Milestones
      </Typography>
    </Toolbar>
  </AppBar>
);

export default NavBar;
