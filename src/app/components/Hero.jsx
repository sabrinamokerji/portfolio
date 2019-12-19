import React from 'react';
import { Grid } from './Grid';
import { createUseStyles } from 'react-jss';
import wave from '../../assets/wavePrimary.svg';

const useStyles = createUseStyles(theme => ({
  heroTitle: {
    textAlign   : 'center',
    color       : theme.color.white,
    fontSize    : 30,
    paddingTop  : 50,
    marginBottom: 5,
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize    : 55,
      paddingTop  : 65,
      marginBottom: 10,
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      fontSize  : 70,
      paddingTop: 130,
    },
  },
  heroSubtitle: {
    fontSize     : 22,
    paddingBottom: 35,
    textAlign    : 'center',
    color        : theme.color.white,
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize: 30,
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      fontSize: 40,
      paddingBottom: 50,
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
        <h1 className={classes.heroTitle}>Hello! I'm Sabrina.</h1>
        <h2 className={classes.heroSubtitle}>I'm a Front End Engineer.</h2>
      </Grid>
      <Grid item xs={12}>
        <img className={classes.wave} src={wave} alt="Wave" />
      </Grid>
    </Grid>
  );
};
