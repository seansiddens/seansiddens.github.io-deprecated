import React from 'react';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NotFound = (() => {
  return (
    <>
      <Toolbar />
      <Container>
        <Typography variant='h1'>
          Page not found :(
        </Typography>
      </Container>
    </>
  );
});

export default NotFound;