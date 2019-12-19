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
    'h1, h2, h3, h4, h5, h6': {
      margin: 0,
    },
    p: {
      margin    : '0 0 16px',
      lineHeight: 1.5,
    },
    a: {
      textDecoration: 'none',
      color         : theme.color.secondary,
      '&:hover': {
        opacity: 0.8,
      },
    },
  },
}))

export const StyleBase = (props) => {
  const { children = null } = props;
  useStyles();
  return <React.Fragment>{children}</React.Fragment>;
};