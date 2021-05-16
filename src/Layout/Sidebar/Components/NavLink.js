import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, } from 'react-router-dom';

const SidebarNavMenu = (props) => {
  const classes = useStyles();
  const { children, to } = props;
  return (
    <NavLink

      to={to}
      exact
      className={classes.link}
      activeClassName={classes.active} >
      {children}
    </NavLink>
  );
}

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.colors.grey,
    fontWeight: 600,
    fontSize: 20,
    textDecoration: 'none',
    padding: theme.spacing(1),
    width: '100%',
    textAlign: 'center',
    '&:hover': {
      background: '#1f2228',
      color: '#fff',
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    }
  },
  active: {
    background: '#1f2228',
    color: '#fff',
  }
}));

export default SidebarNavMenu;