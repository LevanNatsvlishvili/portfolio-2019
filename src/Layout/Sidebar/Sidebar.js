import React from 'react';
import Grid from '@material-ui/core/Grid';
import SidebarProfile from './SidebarProfile';
import SidebarSocialMedia from './SidebarSocialMedia';
import SidebarNavMenu from './SidebarNavMenu';


const Sidebar = (props) => {

  return (
    <Grid container>
      <Grid item xs={12}>
        <SidebarProfile />
      </Grid>
      <Grid item xs={12}>
        <SidebarSocialMedia />
      </Grid>
      <Grid item xs={12}>
        <SidebarNavMenu />
      </Grid>

    </Grid>
  );
}

export default Sidebar;