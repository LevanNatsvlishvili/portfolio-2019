import React from 'react';
import BoxPanel from 'Components/BoxPanel/';
import Grid from '@material-ui/core/Grid';
import AboutText from 'Modules/About/Components/AboutText';
import ExperienceBoxTitle from './ExperienceBoxTitle';


const ExperienceBox = (props) => {
  const { companyName, date, companyIcon, position, tech, descriptions } = props;

  return (
    <BoxPanel margin='0' width='100%' spacing={2}>
      <Grid item xs={12}>
        <ExperienceBoxTitle
          company={companyName}
          date={date}
          icon={companyIcon} />
      </Grid>
      <Grid item xs={12}>
        <AboutText lineHeight='26px' heading='Position:' desc={position} />
        <AboutText lineHeight='26px' heading='Technologies:' desc={tech} />
        <AboutText lineHeight='26px' heading='Description:' desc={
          <ul>
            {descriptions.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        } />
      </Grid>
    </BoxPanel>
  );
}

export default ExperienceBox;