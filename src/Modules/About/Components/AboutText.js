import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const AboutText = (props) => {
  const classes = useStyles({
    lineHeight: props.lineHeight
  });
  const { heading, desc, link } = props;

  return (
    <div >
      <Typography className={classes.heading}  >
        {heading}
        <Typography component='span' className={classes.desc}>
          {link ? <a target="_blank" rel="noopener noreferrer" href={link}>
            {desc}
          </a> : desc}
        </Typography>
      </Typography>

    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: 14,
    color: theme.colors.grey,
    lineHeight: props => props.lineHeight || '18px',
    fontWeight: 800,
    '& ul': {
      margin: 0,
      paddingLeft: 15,
    },
    [theme.breakpoints.down("sm")]: {
      position: 'unset',
    }
  },
  desc: {
    fontSize: 14,
    marginLeft: theme.spacing(.5),
    color: theme.colors.grey,
    '& a': {
      color: '#007bff'
    },
    [theme.breakpoints.down("sm")]: {
      position: 'unset',
    }
  },
}));

export default AboutText;