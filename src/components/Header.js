import React from 'react';
import AppBar from '@mui/material';
import Container from '@mui/material';
import IconButton from '@mui/material';
import Toolbar from '@mui/material';
import Typography from '@mui/material';
import MenuIcon from '@mui/icons-material/MenuIcon';

const Header = (() => {

  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Container>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
          >
            Sean Siddens
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
});

export default Header;