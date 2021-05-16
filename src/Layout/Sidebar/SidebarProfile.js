import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'Components/Img';


const SidebarProfile = () => {
  const classes = useStyles();

  return (
    <Box className={classes.profile} >
      <Img src='/images/profile/LevanNatsvlishvili.jpeg' alt="" />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  profile: {
    width: 126,
    height: 126,
    borderRadius: '100px',
    margin: '50px auto',
    boxShadow: ' 0 0 0 7px #292d35, 0 0 0 12px #1a1d22, 0 0 0 13px #3c434f',
    '& img': {
      float: 'left',
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      borderRadius: '100px',
    },
    [theme.breakpoints.down("sm")]: {
      width: 100,
      height: 100,
      margin: '30px auto'
    }
  }
}));

export default SidebarProfile;