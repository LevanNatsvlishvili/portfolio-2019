import React from 'react';
import Grid from '@material-ui/core/Grid';
import BoxPanel from 'Components/BoxPanel/';
import Text from 'Components/Text';
import Box from '@material-ui/core/Box';

const SkillsSet = ({ set }) => {

  return (
    <BoxPanel spacing={2} container margin='0' width='100%'>
      <Grid item xs={12}>
        <TextBold text={set.title} />
        <Box mt={2}>
          {set.skills.map((skill, index) => (
            <TextRegular text={skill} key={index} />
          ))}
        </Box>
      </Grid>
    </BoxPanel>
  );
}

function TextBold({ text }) {
  return (
    <Text
      lineHeight='26px'
      fontWeight='bold'
      fontSize='24px'>
      {text}
    </Text>
  )
}

function TextRegular({ text }) {
  return (
    <Text
      lineHeight='22px'
      fontSize='16px'>
      {text}
    </Text>
  )
}

export default SkillsSet;