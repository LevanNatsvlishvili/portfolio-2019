import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from './Components/ListItem';
import Url from 'Paths';
import NavLink from './Components/NavLink';

const SidebarNavMenu = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem>
        <NavLink to={Url.ABOUT}> About Me</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={Url.EXPERIENCE}>Work Experience</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={Url.PROJECTS}>Projects</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={Url.EDUCATION}>Education</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={Url.SKILLS}>Skills</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={Url.SERVICES}>Services</NavLink>
      </ListItem>
    </List>
  );
}

const useStyles = makeStyles((theme) => ({
  list: {
    marginTop: theme.spacing(2)
  }
}));

export default SidebarNavMenu;