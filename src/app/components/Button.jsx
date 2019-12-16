import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { capitalize } from '../utils/formatters';

const useStyles = createUseStyles(theme => ({
  button: {
    alignItems    : 'center',
    background    : 'transparent',
    border        : 0,
    borderRadius  : '4px',
    color         : 'inherit',
    cursor        : 'pointer',
    display       : 'inline-flex',
    fontFamily    : theme.text.base,
    fontSize      : 16,
    fontWeight    : 500,
    justifyContent: 'center',
    lineHeight    : 1.75,
    margin        : 0,
    minWidth      : '64px',
    outline       : 0,
    padding       : '6px 8px',
    position      : 'relative',
    textDecoration: 'none',
    verticalAlign : 'middle',
    '&:hover': {
      textDecoration: 'none',
      opacity: 0.8,
    },
    '&.textPrimary': {
      color: theme.color.primary,
    },
    '&.textSecondary': {
      color: theme.color.secondary,
    },
    '&.textTertiary': {
      color: theme.color.tertiary,
    },
    '&.filled': {
      boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
      color: theme.color.text,
      background: theme.color.grey,
      '&:hover': {
        opacity: 0.8,
      },
    },
    '&.filledPrimary': {
      color: theme.color.white,
      background: theme.color.primary,
    },
    '&.filledSecondary': {
      color: theme.color.white,
      background: theme.color.secondary,
    },
    '&.filledTertiary': {
      color: theme.color.white,
      background: theme.color.tertiary,
    },
    '&.outlined': {
      border: `1px solid ${theme.color.grey}`,
      padding: '5px 15px',
    },
    '&.outlinedPrimary': {
      color: theme.color.primary,
      border: `1px solid ${theme.color.primary}`,
    },
    '&.outlinedSecondary': {
      color: theme.color.secondary,
      border: `1px solid ${theme.color.secondary}`,
    },
    '&.outlinedTertiary': {
      color: theme.color.tertiary,
      border: `1px solid ${theme.color.tertiary}`,
    },
    '&.textSizeSmall': {
      padding: '4px 5px',
      fontSize: 13,
    },
    '&.textSizeLarge': {
      padding: '8px 10px',
      fontSize: 18,
    },
    '&.filledSizeSmall': {
      padding: '4px 10px',
      fontSize: 13,
    },
    '&.filledSizeLarge': {
      padding: '8px 22px',
      fontSize: 18,
    },
    '&.outlinedSizeSmall': {
      padding: '3px 9px',
      fontSize: 13,
    },
    '&.outlinedSizeLarge': {
      padding: '7px 21px',
      fontSize: 18,
    },
  },
}))

export const Button = ({ ...props }) => {
  const {
    children,
    className,
    color   = 'inherit',
    onClick,
    size    = 'medium',
    type    = 'button',
    variant = 'text',
    ...buttonProps
  } = props;
  const classes = useStyles();

  return (
    <button
      // Contructs classNames conditionally
      className={clsx(
        classes.button, 
        variant,
        {
          [`${variant}${capitalize(color)}`]: color !== 'inherit',
          [`${variant}Size${capitalize(size)}`]: size !== 'medium',
          [`size${capitalize(size)}`]: size !== 'medium',
        },
        className,
      )}
      color   = {color}
      onClick = {onClick}
      size    = {size}
      type    = {type}
      variant = {variant}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children : PropTypes.node,
  className: PropTypes.string,
  color    : PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  onClick  : PropTypes.func,
  size     : PropTypes.oneOf(['small', 'medium', 'large']),
  type     : PropTypes.oneOf(['button', 'reset', 'submit']),
  variant  : PropTypes.oneOf(['filled', 'outlined', 'text']),
};