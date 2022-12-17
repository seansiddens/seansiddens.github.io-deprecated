import React from 'react';
import {useNavigate} from 'react-router';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = (() => {
  const nav = useNavigate();

  return (
    <AppBar>
      <Toolbar>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
        >
          Sean Siddens
        </Typography>
        <Box sx={{flexGrow: 1}} />
        <ButtonGroup size='large'>
          <Button 
            color='inherit'
            variant='text'
            onClick={() => nav('/about')}
          >
            About
          </Button>
          <Button 
            color='inherit'
            variant='text'
            onClick={() => nav('/portfolio')}
          >
            Portfolio
          </Button>
          <Button color='inherit' variant='text'>Blog</Button>
          <Button color='inherit' variant='text'>Resume</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
});

export default Header;