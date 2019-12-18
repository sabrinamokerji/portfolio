import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  sectionTitle: {
    fontSize  : 32,
    margin    : `10px 0 40px`,
    background: `linear-gradient(180deg, transparent 65%, ${theme.color.secondary} 0)`,
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize: 40,
      margin  : `0 0 ${theme.spacing * 5}px`,
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      fontSize: 50,
    },
  },
}))

export const SectionTitle = (props) => {
  const { children, titleProps } = props;
  const classes = useStyles();
  return (
    <h2 className={classes.sectionTitle} {...titleProps}>
      {children}
    </h2>
  );
};