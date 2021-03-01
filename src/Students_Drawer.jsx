import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Navbar from './Navbar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Cards_area from './Cards_area';
import {Link} from 'react-router-dom';
import Task_modal from './Task_modal';
import Mat_modal from './Mat_modal';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: theme.zIndex.appBar-1000,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      backgroundColor:"#1d1f3e",
      padding:"0px",
      margin:"0px", 
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    color:"white",
    background: "rgb(51,56,103)",
    background: "linear-gradient(135deg, rgba(51,56,103,1) 0%, rgba(41,45,88,1) 35%, rgba(26,28,62,1) 100%)",
    backgroundSize:"cover"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Students_Drawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List >
          <ListItem >
          <Link style={{color:"lightgray"}} className="nav-link active dashborad_link" aria-current="page" to="/Student_Dashboard"><DashboardIcon fontSize="large" style={{paddingRight:"5px"}}/>Dashboard</Link>
          </ListItem>
          <ListItem>
              <Link style={{color:"lightgray"}} className="nav-link" to="#">General</Link>
           </ListItem>
           <ListItem>
           <Link style={{color:"lightgray"}} className="nav-link" to="/Attendance_view">View Attendance</Link>
           </ListItem>
           <ListItem>
              <Link style={{color:"lightgray"}} className="nav-link" to="/Result_view">View Results</Link>
           </ListItem>
           <ListItem>
              <Link style={{color:"lightgray"}} className="nav-link" to="#">Quizes</Link>
          </ListItem>
          <ListItem>
              <Link style={{color:"lightgray"}} className="nav-link" to="#">Assignments</Link>
          </ListItem>
          <ListItem>
              <Link style={{color:"lightgray"}} className="nav-link" to="#">QC Evaluation</Link>
             
          </ListItem>
          <ListItem>
              <Link style={{color:"lightgray"}} className="nav-link" to="#">Google Maps</Link>
          </ListItem>
          <ListItem>
              <Link style={{color:"lightgray"}} className="nav-link" to="/Choose_account">Log Out</Link>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
       
        <Navbar open_drawer={handleDrawerToggle}/>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.left_component}
      </main>
    </div>
  );
}

Students_Drawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Students_Drawer;
