import React from 'react';
import Img from 'Components/Img/';
import Text from 'Components/Text/';
import Link from './Link';
import Box from '@material-ui/core/Box';

const Certificate = (props) => {
  const { link, isCertified, name } = props;

  const certified = {
    true: '/icons/check.svg',
    false: '/icons/cross.svg',
  }

  return (
    <Box justifyContent={{ xs: 'center', sm: 'unset' }} display='flex'>
      {isCertified ?
        <Link link={link} text={name} /> :
        <Text
          lineHeight='20px'
          fontSize='16px'>
          {name}
        </Text>}

      <Img marginLeft='1' src={certified[isCertified]} />
    </Box>

  );
}

export default Certificate;