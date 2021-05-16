import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const Img = (props) => {
  const classes = useStyles({
    width: props.width,
    radius: props.radius,
    marginRight: props.marginRight,
  })
  const { src, ...rest } = props;
  return (
    <img className={classes.img} src={`${process.env.PUBLIC_URL}${src}`} alt="" {...rest} />
  );
}

const useStyles = makeStyles((theme) => ({
  img: {
    width: props => props.width,
    borderRadius: props => props.radius,
    marginRight: props => theme.spacing(props.marginRight)
  }
}));

export default Img;