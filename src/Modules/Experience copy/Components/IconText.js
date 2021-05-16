import React from 'react';
import Box from '@material-ui/core/Box';
import Img from 'Components/Img';
import Text from 'Components/Text/';
import { Hidden } from '@material-ui/core';

const IconText = (props) => {

  const { text, icon } = props;
  return (
    <Box display='flex' alignItems='center'>
      <Hidden xsDown>
        {icon ? <Img marginRight='1' radius='6px' width='35px' src={icon} /> : null}
      </Hidden>
      <Text fontSize='20px' >
        {text}
      </Text>
    </Box>
  );
}

export default IconText;