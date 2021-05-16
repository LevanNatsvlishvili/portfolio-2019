import React from 'react';
import Grid from '@material-ui/core/Grid';
import BoxPanel from 'Components/BoxPanel/';
import Text from 'Components/Text';
import Box from '@material-ui/core/Box';
import Img from 'Components/Img';

const SkillsSet = ({ set }) => {

  return (
    <BoxPanel container margin='0' width='100%'>
      <Grid item xs={12}>
        <Box height={{ xs: '100%', sm: '100px', md: '130px' }}>
          <Img width='100%' height='100%' radius='6px' src={set.img} />
        </Box>
      </Grid>
      <Box mt={1}>
        <TextBold text={set.title} />
        <Box mt={1}>
          <TextRegular text={set.desc} />
        </Box>
      </Box>
    </BoxPanel >
  );
}

function TextBold({ text }) {
  return (
    <Text
      lineHeight='22px'
      fontWeight='bold'
      fontSize='20px'>
      {text}
    </Text>
  )
}

function TextRegular({ text }) {
  return (
    <Text
      lineHeight='18px'
      fontSize='16px'>
      {text}
    </Text>
  )
}

export default SkillsSet;