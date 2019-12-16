import React from 'react';
import { ThemeWrapper } from './components/ThemeWrapper';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StyleBase } from './components/StyleBase';
import { ProjectsContainer } from './containers/ProjectsContainer';
import { About } from './components/About';
import { Footer } from './components/Footer';

export const App = (() => (
  <ThemeWrapper>
    <StyleBase />
    <Header />
    <Hero />
    <ProjectsContainer />
    <About />
    <Footer />
  </ThemeWrapper>
));
