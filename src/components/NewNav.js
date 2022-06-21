import React, {useContext} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Avatar from './Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import {AppContext} from '../context/AppContext';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import MenuBookIcon from '@mui/icons-material/MenuBook';


const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  opacity: .7
}));


export default function PersistentDrawerLeft({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {user} = useContext(AppContext)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };


  return (
    <>
    <Box className = "flexgrow-1" sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{flexGrow:1}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ backgroundColor: "#870808", mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography fontSize="small" variant="h6" sx={{flexGrow:1}} noWrap component="div">
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                <Avatar></Avatar>
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{  backgroundColor: "#870808" , mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user?.token ?(
                [
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="left">
                    <Link to='/logout'  style={{textDecoration:'none', color:'black', fontSize:'smaller'}}>
                      Logout
                    </Link>
                  </Typography>
                </MenuItem>,
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="left">
                    <Link to='/editprofile' style={{textDecoration:'none', color:'black', fontSize:'smaller'}}>
                      Edit Profile
                    </Link>
                  </Typography>
                </MenuItem>
                ]
              )              
              :
              (
               [ 
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link to='/login' style={{textDecoration:'none', color:'black'}}>
                      Login
                    </Link>
                    </Typography>
                </MenuItem>,
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link to='/register' style={{textDecoration:'none', color:'black'}}>
                      Register
                    </Link>
                  </Typography>
                </MenuItem>
               ]
              ) 
            }
            </Menu>
            
          </Box>
        </Toolbar> 
      </AppBar>
      <Drawer
        sx={{          
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: "#870808"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>MENU
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon color="#ffffff"/> : <ChevronRightIcon color="#ffffff" />}
          </IconButton>
        </DrawerHeader>
        <Divider />
          <List>
          {user?.token?(
          [
            <ListItem key={1} fontSize="small" disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                    <MenuBookIcon/>
                  </ListItemIcon>
                  <Link to='/search' style={{textDecoration:"none", color:"white"}}>
                    <ListItemText>All Books</ListItemText>
                  </Link>
              </ListItemButton>
            </ListItem>,
            <ListItem key={1} fontSize="small" disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                    <SummarizeOutlinedIcon/>
                  </ListItemIcon>
                  <Link to='/list' style={{textDecoration:"none", color:"white"}}>
                    <ListItemText>My Reading List</ListItemText>
                  </Link>
              </ListItemButton>
            </ListItem>,
            <ListItem key={2} disablePadding>
              <ListItemButton>
                <ListItemIcon><ExitToAppOutlinedIcon/>
                </ListItemIcon>
                <Link to='/logout' style={{textDecoration:"none", color:"white"}}>
                  <ListItemText>Logout</ListItemText>
                </Link>
              </ListItemButton>
            </ListItem>,
            <ListItem key={3} disablePadding>
              <ListItemButton>
                <ListItemIcon><EditOutlinedIcon/>
                </ListItemIcon>
                <Link to='/editprofile' style={{textDecoration:"none", color:"white"}}>
                  <ListItemText>Edit Profile</ListItemText>
                </Link>
              </ListItemButton>
            </ListItem>
          ].map(x=>x)
          )
            :(
              [
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <ListItemIcon><LoginIcon/>
                </ListItemIcon>
                <Link to='/login' style={{textDecoration:"none", color:"white"}}>
                  <ListItemText>Login</ListItemText>
                </Link>
              </ListItemButton>
            </ListItem>,
            <ListItem key={2} disablePadding>
              <ListItemButton>
                <ListItemIcon><EditOutlinedIcon/>
                </ListItemIcon>
                <Link to='/register' style={{textDecoration:"none", color:"white"}}>
                  <ListItemText>Register</ListItemText>
                </Link>
              </ListItemButton>
            </ListItem>
            ].map(x=>x)
            )
          }
            </List>        
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
        {/* {<Typography paragraph>
          
        </Typography>
        <Typography paragraph>
          
        </Typography>} */}
      </Main>
    </Box>
    </>
)}
