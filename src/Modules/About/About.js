import React from 'react';
import Grid from '@material-ui/core/Grid';
import AboutProfile from './AboutProfile/';
import AboutSummary from './AboutSummary/';


const About = () => {

  return (
    <Grid spacing={2} container>
      <Grid item xs={12}>
        <AboutProfile />
      </Grid>
      <Grid item xs={12}>
        <AboutSummary />
      </Grid>
    </Grid>
  );
}

export default About;