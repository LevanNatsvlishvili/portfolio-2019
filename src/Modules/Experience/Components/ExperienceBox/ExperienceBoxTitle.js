import React from 'react';
import Text from 'Components/Text/';
import IconText from '../IconText';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const ExperienceBoxTitle = (props) => {
  const { company, date, icon } = props;

  return (
    <Grid container spacing={1}>
      <Grid xs={12} sm={8} item>
        <IconText text={company} icon={icon} />
      </Grid>
      <Grid xs={12} sm={4} item>
        <Box ml={{ xs: 0, sm: 'auto' }} my='auto' alignItems='center' height='100%' display='table'>
          <Box height='100%' display='flex' alignItems='center'>
            <Text fontWeight='500' lineHeight='22px' fontSize='16px'>{date}</Text>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ExperienceBoxTitle;