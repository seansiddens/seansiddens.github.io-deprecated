import React from 'react';
import { useNavigate } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ImageIcon from '@mui/icons-material/Image';
import CreateIcon from '@mui/icons-material/Create';
import ArticleIcon from '@mui/icons-material/Article';

// TODO: On 'xs' size, switch to using a sidebar navigation.

const drawerWidth = 250;
const HeaderContext = React.createContext();

const Header = (() => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const nav = useNavigate();

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='toggle drawer'
            edge='start'
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='h2'
            variant='h5'
            color='inherit'
            align='center'
            noWrap
          >
            Sean Siddens
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <ButtonGroup
            size='large'
            sx={{
              display: { xs: 'none', sm: 'inline' }
            }}
          >
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
            <Button
              color='inherit'
              variant='text'
              onClick={() => nav('/blog')}
            >
              Blog
            </Button>
            <Button
              color='inherit'
              variant='text'
              onClick={() => nav('/resume')}
            >
              Resume
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <HeaderContext.Provider value={{ drawerOpen, setDrawerOpen }}>
        <NavDrawer />
      </HeaderContext.Provider>
    </>
  );
});

const NavDrawer = ((props) => {
  const { drawerOpen, setDrawerOpen } = React.useContext(HeaderContext);
  const nav = useNavigate();

  const handleDrawerClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <div>
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem key={'About'} disablePadding>
            <ListItemButton
              onClick={
                () => {
                  handleDrawerClick();
                  nav('/about');
                }
              }
            >
              <ListItemIcon>
                <QuestionMarkIcon />
              </ListItemIcon>
              <ListItemText primary={'About'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Portfolio'} disablePadding>
            <ListItemButton
              onClick={
                () => {
                  handleDrawerClick();
                  nav('/portfolio');
                }
              }
            >
              <ListItemIcon>
                <ImageIcon />
              </ListItemIcon>
              <ListItemText primary={'Portfolio'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Blog'} disablePadding>
            <ListItemButton
              onClick={
                () => {
                  handleDrawerClick();
                  nav('/blog');
                }
              }
            >
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary={'Blog'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Resume'} disablePadding>
            <ListItemButton
              onClick={
                () => {
                  handleDrawerClick();
                  nav('/resume');
                }
              }
            >
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary={'Resume'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );

  return (
    <>
      <Drawer
        variant='temporary'
        open={drawerOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          'display': { sm: 'none'},
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        onClose={() => handleDrawerClick()}
      >
        {drawer}
      </Drawer>
    </>
  );
});

export default Header;