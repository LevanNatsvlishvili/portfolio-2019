import React from 'react';
import Grid from '@material-ui/core/Grid';
import SkillsSet from './ServicesOffer';

const Skills = () => {

  return (
    <Grid spacing={2} container>
      {skillsets.map((set, index) => (
        <Grid xs={12} sm={4} item>
          <SkillsSet key={index} set={set} />
        </Grid>
      ))}

    </Grid>

  );
}

const skillsets = [
  {
    title: 'Landing Page',
    desc: 'I will build you landing page',
    img: '/images/services/website.jpg'
  },
  {
    title: 'Web Application',
    desc: 'I will build you a Front-end web application',
    img: '/images/services/webapplication.png'
  },
  {
    title: 'Web Design',
    desc: 'I will make you a beautiful web design',
    img: '/images/services/webdesign.jpg'
  },


]

export default Skills;