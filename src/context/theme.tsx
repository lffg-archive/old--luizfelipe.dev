import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export const theme = {
  colors: {
    primary: '#39c',
    secondary: '#444',
    background: '#fff',
    text: '#222',
    link: '#00f'
  },
  screen: {
    xl: '1350px',
    lg: '1000px',
    md: '750px',
    sm: '550px'
  }
} as const;

export function ThemeProvider({ children }: Props) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
