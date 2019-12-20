import * as React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Grid } from './Grid';

const useStyles = createUseStyles(theme => ({
  scoreContainer: {
    marginBottom: '70px',
    position    : 'relative',
    [`@media (min-width: ${theme.breakpoints.xs})`]: {
      marginBottom: '50px',
    },
  },
  score: {
    fontSize: 14,
  },
  largeScore: {
    fontWeight: 500,
    fontSize  : 60,
  },
  tickerWrapper: {
    position  : 'relative',
    width     : '100%',
    marginTop : '-20px',
    marginLeft: '5px',
  },
  innerCircle: {
    paddingTop: '50%',
    display   : 'block',
    height    : 0,
  },
  creditGaugeWrapper: {
    position: 'relative',
    width   : '275px',
  },
  creditGauge: {
    position: 'absolute',
    width   : '100%',
    overflow: 'hidden',
  },
  circle: {
    width   : '251px',
    position: 'relative',
    margin  : '0 auto',
    height  : '127px',
  },
  ticker: {
    width       : '28px',
    height      : '28px',
    borderRadius: '50%',
    background  : theme.color.white,
    border      : `7px solid ${theme.color.green}`,
  },
}))

export const CreditScoreSimulator = (props) => {
  const { value }   = props;
  const classes     = useStyles();
  const theme       = useTheme();
  const creditScore = value;
  const minScore    = 300;
  const maxScore    = 850;

  // Since the graph does not start at 0, get the range of numbers that the graph actually displays
  const graphRange = maxScore - minScore;
  // Subtract the number the graph starts at from the credit score value
  const scoreWithinRange = creditScore - minScore;
  // Get the percentage of the graph that the credit score represents
  const graphPercentage = scoreWithinRange / graphRange;
  // Get the degrees to rotate by multiplying the percentage by 180 degrees
  const graphScore = graphPercentage * 180;

  const tickerPosition = {
    transition: '.8s',
    transform : `rotateZ(${graphScore}deg)`,
  };

  return (
    <Grid container justify="center" className={classes.scoreContainer}>
      <Grid item>
        <div className={classes.creditGaugeWrapper}>
          <svg
            className = {classes.creditGauge}
            width     = "261px"
            height    = "147px"
            viewBox   = "0 0 261 147"
            version   = "1.1"
          >
            <path
              fill = {theme.color.green}
              d    = "M18.0390265,126.914469 L5,126.893901 C5,56.8688388 61.139214,0 130.5,0 C199.755853,0 256,56.7627402 256,126.893901 L242.960451,126.893901 C241.36379,64.2646924 191.624758,14 130.5,14 C69.3685512,14 19.6253207,64.2756977 18.0390268,126.914459 Z"
            />
            <text fill={theme.color.text}>
              <tspan x="0" y="146">
                {minScore}
              </tspan>
            </text>
            <text fill={theme.color.text}>
              <tspan x="238" y="146">
                {maxScore}
              </tspan>
            </text>
            <text className={classes.largeScore} fill={theme.color.text}>
              <tspan x="79" y="124">
                {creditScore}
              </tspan>
            </text>
          </svg>
          <div className={classes.circle}>
            <span className={classes.innerCircle}>&nbsp;</span>
            <div style={tickerPosition} className={classes.tickerWrapper}>
              <div className={classes.ticker}>&nbsp;</div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
