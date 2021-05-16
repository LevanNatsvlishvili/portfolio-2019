import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Text = (props) => {
  const classes = useStyles({
    color: props.color,
    margin: props.margin,
    fontSize: props.fontSize,
    fontSizeMd: props.fontSizeMd,
    fontSizeSm: props.fontSizeSm,
    lineHeight: props.lineHeight,
    lineHeightMd: props.lineHeightMd,
    fontWeight: props.fontWeight,
    fontFamily: props.fontFamily
  });
  const { children, ...rest } = props;
  return (
    <Typography className={classes.root} {...rest} >
      {children}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: (props) => theme.colors[props.color || 'orange'],
    fontSize: (props) => props.fontSize || '14px',
    lineHeight: (props) => props.lineHeight || '14px',
    fontWeight: (props) => props.fontWeight || '400',
    margin: props => theme.spacing(...props.margin || '0'),
    // fontFamily: props => props.fontFamily || "regular",
    [theme.breakpoints.down('md')]: {
      fontSize: (props) => props.fontSizeLg,
      lineHeight: (props) => props.lineHeightMd,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: (props) => props.fontSizeSm,
      lineHeight: (props) => props.lineHeightSm,
    },

  },
}));

export default Text;