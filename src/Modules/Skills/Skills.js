import React from 'react';
import Grid from '@material-ui/core/Grid';
import SkillsSet from './SkillsSet';

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
    title: 'Front-end',
    skills: [
      'React',
      'Javascript/Typescript',
      'HTML5',
      'CSS3',
      'BOOTSTRAP',
      'Material Ui',
      'Responsive Design',
    ]
  },
  {
    title: 'Back-end',
    skills: [
      'Adobe XD',
      'UI',
    ]
  },
  {
    title: 'Design',
    skills: [
      'PHP',
      'MYSQL',
    ]
  },

]

export default Skills;