import React from 'react';
import BoxPanel from 'Components/BoxPanel/';
import Text from 'Components/Text/';
import Grid from '@material-ui/core/Grid';
import EducationBox from '../Components/EducationBox';
import Box from '@material-ui/core/Box';


const Courses = (props) => {

  return (
    <BoxPanel margin='0' width='100%' spacing={2}>
      <Grid item xs={12}>
        <Box mb={2}>
          <Text fontSize='32px'>Courses</Text>
        </Box>
      </Grid>
      {courses.map((course, index) => (
        <Grid item xs={12} md={6}>
          <EducationBox
            key={index}
            certificate={course.certificate}
            logo={course.logo}
            date={course.date}
            company={course.company}
            degree={course.degree} />
        </Grid>
      ))}
    </BoxPanel>
  );
}

const courses = [
  {
    degree: 'React/Javascript Course',
    company: 'Geolab',
    date: '2020',
    certificate: {
      link: 'https://drive.google.com/file/d/1AAfGjjNuFvKf2Vab16pdqwLklnbL6KxT/view?usp=sharing',
      isCertified: true,
      name: 'Certificate'
    },
    logo: '/images/education/geolab.svg'
  },
  {
    degree: 'PHP for Beginners – Become a PHP Master -CMS Project',
    company: 'Udemy',
    date: '2019',
    certificate: {
      link: '',
      isCertified: false,
      name: 'Certificate'
    },
    logo: '/images/education/udemy.svg'
  },
  {
    degree: 'The Web Developer Bootcamp',
    company: 'Udemy',
    date: '2018',
    certificate: {
      link: '',
      isCertified: false,
      name: 'Certificate'
    },
    logo: '/images/education/udemy.svg'
  },
]


export default Courses;