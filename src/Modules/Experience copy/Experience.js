import React from 'react';
import Grid from '@material-ui/core/Grid';
import ExperienceBox from './Components/ExperienceBox/ExperienceBox';


const Portfolio = () => {
  return (
    <Grid spacing={2} container>
      {companies.map((company, index) => (
        <Grid item xs={12}>
          <ExperienceBox
            companyName={company.name}
            companyIcon={company.icon}
            date={company.date}
            position={company.position}
            tech={company.technologies}
            descriptions={company.descriptions}
          />
        </Grid>
      ))}
    </Grid>
  );
}

const companies = [
  {
    name: 'Helix Nebula Capital',
    icon: '/images/companies/helixnebula.png',
    date: '[2020.09 - present]',
    position: 'Front-end Reactjs developer',
    technologies: 'ReactJS /HTML /CSS/Material Ui/',
    descriptions: [
      'Creating reusable components',
      'Building structured, easy to read and reconstruct code using SOLID principles',
      'Converting XD to pixel perfect, responsive design',
      'Improving UX and application speed performance',
      'Mentoring and helping intern developers'
    ]
  },
  {
    name: 'Upwork',
    icon: '/images/companies/upwork.jpg',
    date: '[2020.01 - present]',
    position: 'FullStack Web Developer',
    technologies: 'PHP /MYSQL /HTML /CSS /BOOTSTRAP /Javascript /Adobe XD',
    descriptions: [
      'Building and designing markups',
      'Implementing specific functions according to customer’s needs',
      'Converting XD to pixel perfect, responsive design',
      'Developing and launching web applications ',
      'Improving, changing and redesigning websites'
    ]
  },
  {
    name: 'Georgian State Electrosystem',
    icon: '/images/companies/gse.png',
    date: '[2019.08 - 2020.09]',
    position: 'FullStack Web Developer',
    technologies: 'PHP /MYSQL /HTML /CSS /BOOTSTRAP/Javascript',
    descriptions: [
      'Improving existing code',
      'Managing database',
      'Improving security of application',
      'Coordinating with Accounting, Technical and other departments',
    ]
  },
  {
    name: 'Freelancer',
    icon: null,
    date: '[2019.09 - Present]',
    position: 'Front-end developer',
    technologies: 'PHP /MYSQL /HTML /CSS /BOOTSTRAP/Javascript',
    descriptions: [
      'Designing and building markups',
      'Developing responsive websites',
    ]
  },
]

export default Portfolio;