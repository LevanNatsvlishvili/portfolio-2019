import React from 'react';
import BoxPanel from 'Components/BoxPanel/';
import Img from 'Components/Img';
import Text from 'Components/Text';
import Grid from '@material-ui/core/Grid';
import AboutLanguages from './AboutProfileLanguages';
import AboutContactInfo from './AboutProfileContactInfo';


const AboutProfile = (props) => {

  return (
    <BoxPanel margin='0' width='100%' spacing={2}>
      <Grid item xs={12} sm={3}>
        <Img width='100%' radius='6px' src='/images/profile/LevanNatsvlishvili.jpeg' />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Text
          lineHeight='40px'
          fontSize='36px'>
          Levan Natsvlishvili
          </Text>
        <Grid container>
          <Grid xs={12} md={6} item>
            <AboutContactInfo />
          </Grid>
          <Grid xs={12} md={6} item>
            <AboutLanguages />
          </Grid>
        </Grid>
      </Grid>
    </BoxPanel>
  );
}

export default AboutProfile;