import * as React from 'react';
import { Grid } from './Grid';
import { Button } from './Button';
import { CreditScoreSimulator } from './CreditScoreSimulator';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  mockScoreContainer: {
    [`@media (max-width: ${theme.breakpoints.md})`]: {
      flexDirection: 'column-reverse',
    },
  },
  // @TODO: Create typography shared styles
  projectTitle: {
    fontSize: 25,
    margin: `0 0 ${theme.spacing}px`,
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize: 30,
    },
  },
  projectSubtitle: {
    fontSize: 20,
    margin: '26px 0 16px',
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize: 22,
      margin: `${theme.spacing * 3}px 0 ${theme.spacing}px`,
    },
  },
  scoreButtons: {
    margin: `${theme.spacing}px 0 ${theme.spacing * 3}px`,
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      margin: `${theme.spacing * 2}px 0 ${theme.spacing}px`,
    },
    '& > .item': {
      [`@media (min-width: ${theme.breakpoints.sm})`]: {
        marginRight: theme.spacing * 2,
        '&:last-child': {
          marginRight: 0,
        },
      },
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        textAlign: 'center',
        '& > button': {
          fontSize: 16,
          padding: '6px 10px',
        },
      },
    },
  },
}))

export const MockCreditScore = () => {
  const [score, setScore] = React.useState(670);
  const mockScores        = [550, 630, 750, 800];
  const classes           = useStyles();

  return (
    <Grid container className={classes.mockScoreContainer}>
      <Grid item xs={12} md={6}>
        <CreditScoreSimulator value={score} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item xs={12}>
            <h3 className={classes.projectTitle}>Credit Score Simulator</h3>
            <p>
              I created a React component that slides a ticker along a SVG to display where a credit score falls within the 300-850 range. The component was used in conjunction with a credit pull API for a mortgage pre-qualification tool.
            </p>
            <h4 className={classes.projectSubtitle}>Give it a try</h4>
            <p>
              Click the different score buttons to see how it works.
            </p>
          </Grid>
          <Grid item xs={12}>
            <Grid container className={classes.scoreButtons}>
              {mockScores.map((value, index) => {
                return (
                  <Grid item xs={3} sm="auto" key={index}>
                    <Button
                      color   = "primary"
                      size    = "large"
                      design  = "filled"
                      onClick = {() => setScore(value)}
                    >
                      {value}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
