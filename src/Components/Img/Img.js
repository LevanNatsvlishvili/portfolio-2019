import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const Img = (props) => {
  const classes = useStyles({
    width: props.width,
    height: props.height,
    radius: props.radius,
    marginRight: props.marginRight,
    marginLeft: props.marginLeft,
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
    marginRight: props => theme.spacing(props.marginRight),
    marginLeft: props => theme.spacing(props.marginLeft),
    height: props => props.height,
  }
}));

export default Img;