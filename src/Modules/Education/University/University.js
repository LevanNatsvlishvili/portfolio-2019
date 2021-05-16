import React from 'react';
import BoxPanel from 'Components/BoxPanel/';
import Text from 'Components/Text/';
import Grid from '@material-ui/core/Grid';
import EducationBox from '../Components/EducationBox';
import Box from '@material-ui/core/Box';


const Universities = (props) => {

  return (
    <BoxPanel margin='0' width='100%' spacing={2}>
      <Grid item xs={12}>
        <Box mb={2}>
          <Text fontSize='32px'>University</Text>
        </Box>
      </Grid>
      {univerities.map((uni, index) => (
        <Grid item xs={12} md={6}>
          <EducationBox
            key={index}
            certificate={uni.certificate}
            logo={uni.logo}
            date={uni.date}
            company={uni.company}
            degree={uni.degree} />
        </Grid>
      ))}
    </BoxPanel>
  );
}

const univerities = [
  {
    degree: 'Informatics and Management Systems',
    company: 'Georgian Technical University',
    date: '2015-2019',
    certificate: {
      link: 'https://drive.google.com/file/d/1VWXaaJT2V1_26-kg5azd6NxggZ7dn7IA/view',
      isCertified: true,
      name: 'Diploma'
    },
    logo: '/images/education/gtu.png'
  },
  {
    degree: 'IT Project Management',
    company: 'University of Georgia ',
    date: '2020-Present',
    certificate: {
      link: 'https://drive.google.com/file/d/1VWXaaJT2V1_26-kg5azd6NxggZ7dn7IA/view',
      isCertified: false,
      name: 'Diploma'
    },
    logo: '/images/education/ug.png'
  },
]


export default Universities;