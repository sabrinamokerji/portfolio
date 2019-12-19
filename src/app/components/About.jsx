import * as React from 'react';
import { Grid } from './Grid';
import { createUseStyles } from 'react-jss';
import wave from '../../assets/waveTertiary.svg';
import { SectionTitle } from './SectionTitle';
import Iceland from '../../assets/Iceland.jpg';

const useStyles = createUseStyles(theme => ({
  aboutContainer: {
    background   : theme.color.tertiary,
    paddingBottom: theme.spacing * 6,
  },
  // @TODO: Create typography shared styles
  projectTitle: {
    fontSize: 25,
    margin  : `0 0 ${theme.spacing}px`,
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize: 30,
    },
  },
  projectSubtitle: {
    fontSize: 20,
    margin  : '26px 0 16px',
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize: 22,
      margin: `${theme.spacing * 3}px 0 ${theme.spacing}px`,
    },
  },
  wave: {
    display     : 'block',
    marginBottom: '-5px',
  },
  imageWrapper: {
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      textAlign: 'right',
    },
  },
  image: {
    maxWidth: '600px',
    width   : '100%',
    margin: '20px auto 0',
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      marginTop: 0,
      paddingLeft: 30,
    },
  },
}))

export const About = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <img className={classes.wave} src={wave} alt="Wave" />
      </Grid>
      <Grid item xs={12} className={classes.aboutContainer}>
        <Grid container className="layoutWidth" justify="center">
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item>
                <SectionTitle>About me</SectionTitle>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} md={6}>
                <h3 className={classes.projectTitle}>
                  Creative type with way too many hobbies
                </h3>
                <p>
                  I really have a passion for learning new things and going
                  places that I've never been. I've always grasped onto any type
                  of creative expression that I could find as an outlet - but
                  nothing has ever aligned with that more perfectly than my
                  career as a software engineer. I get to challenge myself and
                  think creatively every day and that is so important to me.
                </p>
                <p>
                  I'm a software engineer with a focus on the front end. I love
                  getting my hands dirty with different JavaScript technologies.
                  My current stack consists of React, TypeScript, Redux,
                  Node.js, AWS, and Serverless.
                </p>
                <p>
                  When I'm not coding the day away, I'm probably traveling,
                  attending local music shows, taking a yoga class, checking out
                  a new brewery, or wandering around somewhere random with my
                  camera.
                </p>
              </Grid>
              <Grid item md={6} className={classes.imageWrapper}>
                <img
                  className={classes.image}
                  src={Iceland}
                  alt="Standing on a mountain in Iceland"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
