import React from 'react';
import Box from '@material-ui/core/Box';
import Text from 'Components/Text/';
import AboutText from '../Components/AboutText';


const AboutProfileLanguages = (props) => {

  return (
    <Box display='table' ml={{ xs: 0, md: 'auto' }} >
      <Text
        fontWeight='800'
        lineHeight='36px'
        fontSize='20px'>
        Languages
      </Text>
      <AboutText heading='Georgian' desc='Native' />
      <AboutText heading='English' desc='Fluent' />
      <AboutText heading='Russian' desc='Low' />
    </Box>
  );
}

export default AboutProfileLanguages;