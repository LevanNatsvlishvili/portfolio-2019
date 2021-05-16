import React from 'react';
import BoxPanel from 'Components/BoxPanel/';
import Grid from '@material-ui/core/Grid';
import AboutText from 'Modules/About/Components/AboutText';
import Img from 'Components/Img';
import Text from 'Components/Text/';
import { Box } from '@material-ui/core';


const ExperienceBox = (props) => {
  const { name, link, image, tech, } = props;

  return (
    <BoxPanel margin='0' width='100%' spacing={1}>
      <Grid item xs={12}>
        <Img src={image} width='100%' />
      </Grid>
      <Grid item xs={12}>
        <Box minHeight={{ xs: 0, sm: 140 }}>
          <Text fontSizeMd='22px' fontSize='26px' lineHeight='28px' fontWeight='600' >
            {name}
          </Text>
          <AboutText lineHeight='26px' link={link} heading='Link:' desc={name} />
          <AboutText lineHeight='26px' heading='Technologies:' desc={tech} />
        </Box>
      </Grid>
    </BoxPanel>
  );
}

export default ExperienceBox;