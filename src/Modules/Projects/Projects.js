import React from 'react';
import Grid from '@material-ui/core/Grid';
import Project from './Components/Project/';


const Portfolio = () => {
  return (
    <Grid spacing={2} container>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} lg={4}>
          <Project
            name={project.name}
            image={project.image}
            link={project.link}
            tech={project.technologies}
          />
        </Grid>
      ))}
    </Grid>
  );
}

const projects = [
  {
    name: 'Dataninja',
    image: '/images/projects/dataninja.jpg',
    link: 'https://mydataninja.com/',
    technologies: 'Reactjs /Html /Css /material ui /',
  },
  {
    name: 'Oraquick',
    image: '/images/projects/medweb.jpg',
    link: 'https://levannatsvlishvili.github.io/MedWeb/',
    technologies: 'Reactjs /Html /Css /material ui /Adobe XD/',
  },
  {
    name: 'ClothingStore',
    image: '/images/projects/clothingstore.jpg',
    link: 'https://levannatsvlishvili.github.io/clothingstoretemplate/',
    technologies: 'Reactjs /Html /Css /material ui /Adobe XD/',
  },
  {
    name: 'Tourism',
    image: '/images/projects/tourism.jpg',
    link: 'https://levannatsvlishvili.github.io/geolabproject/',
    technologies: 'HTML /CSS/Bootstrap/',
  },
  {
    name: 'Christembassy',
    image: '/images/projects/christembassy.jpg',
    link: 'https://www.christembassyewcaz5.org/',
    technologies: 'ReactJS /HTML /CSS/Material Ui/',
  },
  {
    name: 'Hotel',
    image: '/images/projects/hotel.jpg',
    link: 'https://levannatsvlishvili.github.io/Hotel/',
    technologies: 'ReactJS /HTML /CSS/Material Ui/',
  },

]

export default Portfolio;