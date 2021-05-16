import React from 'react';
import Text from 'Components/Text/';
import AboutText from '../Components/AboutText';

const AboutProfileContactInfo = (props) => {

  return (
    <>
      <Text
        fontWeight='800'
        lineHeight='36px'
        fontSize='22px'>
        Contact Info
      </Text>
      <AboutText heading='Address' desc='Georgia,Tbilisi' />
      <AboutText heading='E-mail' desc='L.nats51@yahoo.com' />
      <AboutText heading='Github' desc='Github.com/LevanNatsvlishvili/' link='https://github.com/levannatsvlishvili/' />
      <AboutText heading='Linkedin' desc='Linkedin.com/in/levnac/' link='https://linkedin.com/in/levnac/' />

    </>
  );
}

export default AboutProfileContactInfo;