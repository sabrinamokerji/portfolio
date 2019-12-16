import * as React from 'react';
import { Grid } from './Grid';
import { Button } from './Button';
import { CreditScoreSimulator } from './CreditScoreSimulator';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  mockScoreContainer: {
    marginBottom: theme.spacing * 6,
  },
  projectTitle: {
    fontSize: 30,
    margin: `0 0 ${theme.spacing}px`,
  },
  projectSubtitle: {
    fontSize: 22,
    margin: `${theme.spacing * 3}px 0 ${theme.spacing}px`,
  },
  scoresContainer: {
    marginTop: `${theme.spacing * 2}px`,
    '& > .item': {
      marginRight: theme.spacing * 2,
      '&:last-child': {
        marginRight: 0,
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
      <Grid item xs={12} sm={6}>
        <CreditScoreSimulator value={score} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container>
          <Grid item>
            <h3 className={classes.projectTitle}>Credit Score Simulator</h3>
            <p>
              I created a React component that slides a ticker along a SVG to display where a credit score falls within the 300-850 range. The component was used in conjunction with a credit pull API for a mortgage pre-qualification tool.
            </p>
            <h4 className={classes.projectSubtitle}>Give it a try</h4>
            <p>
              Click the different score buttons to see how it works.
            </p>
          </Grid>
          <Grid item>
            <Grid container className={classes.scoresContainer}>
              {mockScores.map((value, index) => {
                return (
                  <Grid item key={index}>
                    <Button
                      color   = "primary"
                      size    = "large"
                      variant = "filled"
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
