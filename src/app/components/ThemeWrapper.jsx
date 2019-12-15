import * as React from 'react';
import { ThemeProvider } from 'theming';

export const ThemeWrapper = ({ children }) => {
  const theme = {
    color: {
      black    : '#000000',
      disabled : '#CBCED3',
      error    : '#f44336',
      grey     : '#dddddd',
      primary  : '#3F34FF',
      secondary: '#80CFE6',
      tertiary : '#FF54FF',
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
