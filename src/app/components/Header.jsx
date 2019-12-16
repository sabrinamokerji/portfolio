import React from 'react';
import { Grid } from './Grid';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  headerContainer: {
    background: theme.color.white,
    padding   : 10,
    boxShadow : '0 3px 5px rgba(57, 63, 72, 0.25)',
  },  
  logo: {
    border      : `3px solid ${theme.color.black}`,
    color       : theme.color.black,
    fontSize    : 16,
    fontWeight  : 700,
    padding     : 8,
    fontFamily  : theme.text.base,
    borderRadius: '4px',
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize: 22,
      padding : 10,
    },
  },
}))

export const Header = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems = "center"
      justify    = "center"
      className  = {classes.headerContainer}
    >
      <Grid item>
        <div className={classes.logo}>
          <span>SM</span>
        </div>
      </Grid>
    </Grid>
  );
};
