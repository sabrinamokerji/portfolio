import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  grid: {
    '&.container': {
      display  : 'flex',
      boxSizing: 'border-box',
      flexWrap : 'wrap',
      width    : '100%',
    },
    '&.item': {
      margin: 0,
      boxSizing: 'border-box',
      /* @TODO: Calculate these programmatically */
      '&.grid-xs-12': {
        flexBasis: '100%',
        flexGrow : 0,
        maxWidth : '100%',
      },
      '&.grid-xs-6': {
        flexBasis: '50%',
        flexGrow : 0,
        maxWidth : '50%',
      },
      '&.grid-xs-4': {
        flexBasis: '33.333333%',
        flexGrow : 0,
        maxWidth : '33.333333%',
      },
      '&.grid-xs-3': {
        flexBasis: '25%',
        flexGrow : 0,
        maxWidth : '25%',
      },
      '&.grid-xs-auto': {
        flexBasis: 'auto',
        flexGrow : 0,
        maxWidth : 'none',
      },
      '&.grid-xs-true': {
        flexBasis: 0,
        flexGrow : 1,
        maxWidth : '100%',
      },
      [`@media (min-width: ${theme.breakpoints.sm})`]: {
        '&.grid-sm-12': {
          flexBasis: '100%',
          flexGrow : 0,
          maxWidth : '100%',
        },
        '&.grid-sm-6': {
          flexBasis: '50%',
          flexGrow : 0,
          maxWidth : '50%',
        },
        '&.grid-sm-4': {
          flexBasis: '33.333333%',
          flexGrow : 0,
          maxWidth : '33.333333%',
        },
        '&.grid-sm-3': {
          flexBasis: '25%',
          flexGrow : 0,
          maxWidth : '25%',
        },
        '&.grid-sm-auto': {
          flexBasis: 'auto',
          flexGrow : 0,
          maxWidth : 'none',
        },
        '&.grid-sm-true': {
          flexBasis: 0,
          flexGrow : 1,
          maxWidth : '100%',
        },
      },
      [`@media (min-width: ${theme.breakpoints.md})`]: {
        '&.grid-md-12': {
          flexBasis: '100%',
          flexGrow : 0,
          maxWidth : '100%',
        },
        '&.grid-md-6': {
          flexBasis: '50%',
          flexGrow : 0,
          maxWidth : '50%',
        },
        '&.grid-md-4': {
          flexBasis: '33.333333%',
          flexGrow : 0,
          maxWidth : '33.333333%',
        },
        '&.grid-md-3': {
          flexBasis: '25%',
          flexGrow : 0,
          maxWidth : '25%',
        },
        '&.grid-md-auto': {
          flexBasis: 'auto',
          flexGrow : 0,
          maxWidth : 'none',
        },
        '&.grid-md-true': {
          flexBasis: 0,
          flexGrow : 1,
          maxWidth : '100%',
        },
      },
      [`@media (min-width: ${theme.breakpoints.lg})`]: {
        '&.grid-lg-12': {
          flexBasis: '100%',
          flexGrow : 0,
          maxWidth : '100%',
        },
        '&.grid-lg-6': {
          flexBasis: '50%',
          flexGrow : 0,
          maxWidth : '50%',
        },
        '&.grid-lg-4': {
          flexBasis: '33.333333%',
          flexGrow : 0,
          maxWidth : '33.333333%',
        },
        '&.grid-lg-3': {
          flexBasis: '25%',
          flexGrow : 0,
          maxWidth : '25%',
        },
        '&.grid-lg-auto': {
          flexBasis: 'auto',
          flexGrow : 0,
          maxWidth : 'none',
        },
        '&.grid-lg-true': {
          flexBasis: 0,
          flexGrow : 1,
          maxWidth : '100%',
        },
      },
      [`@media (min-width: ${theme.breakpoints.xl})`]: {
        '&.grid-xl-12': {
          flexBasis: '100%',
          flexGrow : 0,
          maxWidth : '100%',
        },
        '&.grid-xl-6': {
          flexBasis: '50%',
          flexGrow : 0,
          maxWidth : '50%',
        },
        '&.grid-xl-4': {
          flexBasis: '33.333333%',
          flexGrow : 0,
          maxWidth : '33.333333%',
        },
        '&.grid-xl-3': {
          flexBasis: '25%',
          flexGrow : 0,
          maxWidth : '25%',
        },
        '&.grid-xl-auto': {
          flexBasis: 'auto',
          flexGrow : 0,
          maxWidth : 'none',
        },
        '&.grid-lg-true': {
          flexBasis: 0,
          flexGrow : 1,
          maxWidth : '100%',
        },
      },
    },
    '&.direction-column': {
      flexDirection: 'column',
    },
    '&.direction-column-reverse': {
      flexDirection: 'column-reverse',
    },
    '&.direction-row-reverse': {
      flexDirection: 'row-reverse',
    },
    '&.wrap-nowrap': {
      flexWrap: 'nowrap',
    },
    '&.wrap-wrap-reverse': {
      flexWrap: 'wrap-reverse',
    },
    '&.align-items-center': {
      alignItems: 'center',
    },
    '&.align-items-flex-start': {
      alignItems: 'flex-start',
    },
    '&.align-items-flex-end': {
      alignItems: 'flex-end',
    },
    '&.align-items-baseline': {
      alignItems: 'baseline',
    },
    '&.align-content-center': {
      alignContent: 'center',
    },
    '&.align-content-flex-start': {
      alignContent: 'flex-start',
    },
    '&.align-content-flex-end': {
      alignContent: 'flex-end',
    },
    '&.align-content-space-between': {
      alignContent: 'space-between',
    },
    '&.align-content-space-around': {
      alignContent: 'space-around',
    },
    '&.justify-center': {
      justifyContent: 'center',
    },
    '&.justify-flex-end': {
      justifyContent: 'flex-end',
    },
    '&.justify-space-between': {
      justifyContent: 'space-between',
    },
    '&.justify-space-around': {
      justifyContent: 'space-around',
    },
    '&.justify-space-evenly': {
      justifyContent: 'space-evenly',
    },
    '&.layoutWidth': {
      padding : `0 ${theme.spacing}px`,
      maxWidth: 1400 + (theme.spacing * 2),
      margin  : '0 auto',
    },
  },
}))

export const Grid = (props) => {
  const {
    alignContent = 'stretch',
    alignItems   = 'stretch',
    children,
    className,
    container = false,
    direction = 'row',
    item      = false,
    justify   = 'flex-start',
    lg        = false,
    md        = false,
    sm        = false,
    wrap      = 'wrap',
    xl        = false,
    xs        = false,
    gridProps,
  } = props;
  const classes = useStyles();

  return (
    <div
    // Contructs classNames conditionally
      className={clsx(
        classes.grid, 
        {
          container,
          item,
          [`direction-${String(direction)}`]: direction !== 'row',
          [`wrap-${String(wrap)}`]: wrap !== 'wrap',
          [`align-items-${String(alignItems)}`]: alignItems !== 'stretch',
          [`align-content-${String(alignContent)}`]: alignContent !== 'stretch',
          [`justify-${String(justify)}`]: justify !== 'flex-start',
          [`grid-xs-${String(xs)}`]: xs !== false,
          [`grid-sm-${String(sm)}`]: sm !== false,
          [`grid-md-${String(md)}`]: md !== false,
          [`grid-lg-${String(lg)}`]: lg !== false,
          [`grid-xl-${String(xl)}`]: xl !== false,
        },
        className,
      )}
      {...gridProps}
    >
      {children}
    </div>
  );
};

const gridSizes = [false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Grid.propTypes = {
  alignContent: PropTypes.oneOf([
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around"
  ]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "stretch",
    "baseline"
  ]),
  children : PropTypes.node,
  className: PropTypes.string,
  container: PropTypes.bool,
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  item   : PropTypes.bool,
  justify: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  xl  : PropTypes.oneOf(gridSizes),
  lg  : PropTypes.oneOf(gridSizes),
  md  : PropTypes.oneOf(gridSizes),
  sm  : PropTypes.oneOf(gridSizes),
  xs  : PropTypes.oneOf(gridSizes),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
};