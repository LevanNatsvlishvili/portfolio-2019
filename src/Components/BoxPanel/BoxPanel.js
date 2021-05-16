import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const BoxPanel = (props) => {
  const classes = useStyles({
    width: props.width,
    margin: props.margin,
  });
  const { children, ...rest } = props;
  return (
    <Grid container className={classes.boxPanel} {...rest} >
      {children}
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  boxPanel: {
    background: theme.colors.darkBlue,
    borderRadius: 6,
    padding: theme.spacing(2),
    color: theme.colors.grey,
    width: props => props.width,
    margin: props => props.margin,
  }
}));

export default BoxPanel;