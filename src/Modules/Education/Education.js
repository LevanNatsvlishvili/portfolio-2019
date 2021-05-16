import React from 'react';
import Grid from '@material-ui/core/Grid';
import University from './University';
import Courses from './Courses';


const Education = () => {

  return (
    <Grid spacing={2} container>
      <Grid item xs={12}>
        <University />
      </Grid>
      <Grid item xs={12}>
        <Courses />
      </Grid>
    </Grid>
  );
}

export default Education;