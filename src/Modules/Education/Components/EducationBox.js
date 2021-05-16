import React from 'react';
import Img from 'Components/Img/';
import Text from 'Components/Text/';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Certificate from './Certificate';


const EducationBox = (props) => {
  const classes = useStyles();
  const { certificate, date, company, logo, degree } = props
  return (
    <Grid className={classes.box} container>
      <Grid className={classes.imgContainer} item xs={12} sm={4} lg={3}>
        <Img width='100%' radius='6px' src={logo} />
      </Grid>
      <Grid className={classes.textArea} item xs={12} sm={8} lg={9}>
        <Text
          fontWeight='400'
          lineHeight='20px'
          fontSize='14px'>
          {degree} at
          <Text
            fontWeight='800'
            lineHeight='20px'
            fontSize='14px'>
            {company}
          </Text>
        </Text>
        <Box mt={1}>
          <Text
            lineHeight='20px'
            fontSize='16px'>
            {date}
          </Text>
          <Certificate
            name={certificate.name}
            link={certificate.link}
            isCertified={certificate.isCertified} />
        </Box>

      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  box: {
    border: '1px solid #888',
    borderRadius: 20,
    padding: theme.spacing(2.5),
    minHeight: 170,

  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    '& img': {
      maxWidth: '80px',
      margin: 'auto'
    },
    [theme.breakpoints.down('xs')]: {
      '& img': {
        width: '110px',
        margin: 'auto'
      }
    },
  },
  textArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      textAlign: 'center',

    },
  }
}));

export default EducationBox;