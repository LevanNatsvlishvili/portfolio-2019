import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'Components/Img';


const Sidebar = (props) => {
  const { img, link } = props;
  const classes = useStyles();

  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <Box
        className={classes.socMediaLink}
        width='40px'
        height='40px'
        mx={1}
        borderRadius={90}>
        <Img src={img} alt="socialmedia" />
      </Box>
    </a>
  );
}

const useStyles = makeStyles((theme) => ({
  socMediaLink: {
    background: theme.colors.blue,
    '& img': {
      width: '100%',
    }
  }
}));

export default Sidebar;