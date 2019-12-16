import * as React from 'react';
import { ThemeProvider } from 'theming';

export const ThemeWrapper = ({ children }) => {
  const theme = {
    color: {
      black    : '#000000',
      disabled : '#CBCED3',
      error    : '#f44336',
      green    : '#2bffa5',
      grey     : '#dddddd',
      primary  : '#3F34FF',
      secondary: '#FF54FF',
      tertiary : '#80CFE6',
      text     : '#282828',
      white    : '#ffffff',
    },
    breakpoints: {
      // @TODO: Create functions for media queries
      xs: 0,
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
    },
    spacing: 16,
    text: {
      base: '"Roboto",sans-serif',
    },
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
