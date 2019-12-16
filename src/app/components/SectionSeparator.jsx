import React from 'react';
import { Grid } from './Grid';
import { createUseStyles } from 'react-jss';
import separator from '../../assets/separator.jpg';

const useStyles = createUseStyles(theme => ({
  separatorContainer: {
    background    : `url(${separator}) no-repeat 50%`,
    backgroundSize: 'cover',
    height: '250px',
    width: '100%',
  },
  overlay: {
    background: 'rgba(37, 0, 187, 0.28)',
    height: '100%',
  },
}))

export const SectionSeparator = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems = "center"
      justify    = "center"
      className  = {classes.separatorContainer}
    >
      <Grid item xs={12} className={classes.overlay}>
        <div className={classes.separator}>&nbsp;</div>
      </Grid>
    </Grid>
  );
};
