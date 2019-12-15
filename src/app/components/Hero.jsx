import React from 'react';
import { Grid } from './Grid';
import { createUseStyles } from 'react-jss';
import wave from '../../assets/wave.svg';

const useStyles = createUseStyles(theme => ({
  heroText: {
    textAlign : 'center',
    color     : theme.color.white,
    margin    : 0,
    fontSize  : 70,
    paddingTop: 140,
  },
  heroItem: {
    background: theme.color.primary,
  },
  wave: {
    display  : 'block',
    marginTop: '-5px',
  },
}))

export const Hero = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12} className={classes.heroItem}>
        <h1 className={classes.heroText}>Hello! I'm Sabrina.</h1>
      </Grid>
      <Grid item xs={12}>
        <img className={classes.wave} src={wave} alt="Wave" />
      </Grid>
    </Grid>
  );
};
