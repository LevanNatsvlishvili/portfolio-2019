import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';


const Layout = (props) => {
  const classes = useStyles();

  return (
    <div >
      <Box width={{ xs: '100%', md: '30%', lg: '20%' }} className={classes.sidebar} >
        <Sidebar />
      </Box>
      <Box ml={{ xs: 0, md: '30%', lg: '20%' }} p={2}>
        {props.children}
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  sidebar: {
    top: 0,
    zIndex: 11111,
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '100%',
    fontSize: 15,
    padding: 0,
    textAlign: 'left',
    margin: 0,
    position: 'fixed',
    left: 0,
    backgroundColor: '#1a1d22',
    [theme.breakpoints.down("sm")]: {
      position: 'unset',
    }
  }
}));

export default Layout;