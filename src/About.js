import React from 'react';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Headshot = require('./assets/headshot.jpg');

const About = (() => {
  return (
    <div>
      <Toolbar />
      <Box sx={{ p: 3 }}>
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        >
          <Grid item xs={12} sm={4}>
            <Avatar
              src={Headshot}
              sx={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container>
              <Typography variant='h5'>
                Hi, my name is Sean.
              </Typography>
              <br />
              <Typography variant='body' paragraph={true}>
                I am currently a third year computer science student attending University of California, Santa Cruz.
              </Typography>
              <Typography variant='body' paragraph={true}>
                This site was written by me from scratch using React and MaterialUI.
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});

export default About;