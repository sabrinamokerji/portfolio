import React from 'react';
import { ThemeWrapper } from './components/ThemeWrapper';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StyleBase } from './components/StyleBase';

export const App = (() => (
  <ThemeWrapper>
    <StyleBase />
    <Header />
    <Hero />
  </ThemeWrapper>
));
