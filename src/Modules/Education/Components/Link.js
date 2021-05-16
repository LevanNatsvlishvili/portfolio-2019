import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const Link = (props) => {
  const classes = useStyles();
  const { text, link } = props;

  return (
    <a className={classes.link} target="_blank" rel="noopener noreferrer" href={link}>
      {text}
    </a>
  );
}

const useStyles = makeStyles((theme) => ({
  link: {
    color: '#007bff',
    fontSize: '16px',
    lineHeight: '20px'
  },
}));

export default Link;