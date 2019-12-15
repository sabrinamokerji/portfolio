import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  '@global': {
    html: {
      fontFamily         : theme.text.base,
      color              : theme.color.text,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing          : 'border-box',
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    'strong, b': {
      fontWeight: 'bolder',
    },
    body: {
      margin: 0,
    },
    a: {
      textDecoration: 'none',
    },
  },
}))

export const StyleBase = (props) => {
  const { children = null } = props;
  useStyles();
  return <React.Fragment>{children}</React.Fragment>;
};