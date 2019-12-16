import React from 'react';
import { Grid } from './Grid';
import { createUseStyles } from 'react-jss';
import wave from '../../assets/wave.svg';

const useStyles = createUseStyles(theme => ({
  heroText: {
    textAlign: 'center',
    color    : theme.color.white,
    margin   : 0,
    fontSize : 30,
    padding  : '50px 0 35px',
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize  : 55,
      paddingTop: 65,
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      fontSize: 70,
      padding : '140px 0 50px',
    },
  },
  heroItem: {
    background: theme.color.primary,
    paddng    : '0 15px',
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
