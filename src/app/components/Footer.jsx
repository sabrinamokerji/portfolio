import React from 'react';
import { Grid } from './Grid';
import { createUseStyles } from 'react-jss';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';

const useStyles = createUseStyles(theme => ({
  footerContainer: {
    background: theme.color.white,
    padding   : `${theme.spacing * 2}px ${theme.spacing}px`,
  },
  socialIcons: {
    '& a': {
      display: 'block',
    },
  },
  social: {
    maxWidth: '25px',
    width   : '100%',
    margin  : '10px',
  },
  email: {
    padding : '10px',
    fontSize: 14,
  },
  copyright: {
    margin  : 0,
    fontSize: 14,
  },
}))

export const Footer = () => { 
  const currentYear = new Date().getFullYear();
  const classes     = useStyles();
  return (
    <Grid
      container
      direction  = "column"
      alignItems = "center"
      className  = {classes.footerContainer}
    >
      <Grid item xs={12}>
        <a className={classes.email} href="mailto:mokerjis@gmail.com">
          mokerjis@gmail.com
        </a>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={classes.socialIcons}>
          <Grid item>
            <a
              target = "_blank"
              rel    = "noopener noreferrer"
              href   = "https://github.com/sabrinamokerji"
            >
              <img className={classes.social} src={github} alt="Github" />
            </a>
          </Grid>
          <Grid item>
            <a
              target = "_blank"
              rel    = "noopener noreferrer"
              href   = "https://www.linkedin.com/in/sabrina-mokerji/"
            >
              <img className={classes.social} src={linkedin} alt="LinkedIn" />
            </a>
          </Grid>
          <Grid item>
            <a
              target = "_blank"
              rel    = "noopener noreferrer"
              href   = "https://www.instagram.com/sabrinamokerji/"
            >
              <img className={classes.social} src={instagram} alt="Instagram" />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <p className={classes.copyright}>
          &copy; {currentYear} Sabrina Mokerji
        </p>
      </Grid>
    </Grid>
  );
};