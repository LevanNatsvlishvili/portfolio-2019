import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';


const SidebarNavMenu = (props) => {
  const { children } = props
  const classes = useStyles();

  return (
    <ListItem className={classes.item}>
      {children}
    </ListItem>
  );
}

const useStyles = makeStyles((theme) => ({
  item: {
    padding: 0,
  }
}));

export default SidebarNavMenu;