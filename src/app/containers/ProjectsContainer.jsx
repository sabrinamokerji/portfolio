import * as React from 'react';
import { MockCreditScore } from '../components/MockCreditScore';
import { Grid } from '../components/Grid';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  projectsContainer: {
    padding : `0 ${theme.spacing}px`,
    maxWidth: 1600 + (theme.spacing * 2),
    margin  : '0 auto',
  },
  sectionTitle: {
    fontSize  : 50,
    margin    : `0 0 ${theme.spacing * 5}px`,
    background: `linear-gradient(180deg, transparent 65%, ${theme.color.secondary} 0)`,
  },
}))

export const ProjectsContainer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.projectsContainer}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <h2 className={classes.sectionTitle}>Projects</h2>
          </Grid>
        </Grid>
        <MockCreditScore />
      </Grid>
    </Grid>
  );
};