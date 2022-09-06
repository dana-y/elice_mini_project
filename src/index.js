import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './theme';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <ThemeProvider theme={mainTheme}>
      <App tab='home' />
    </ThemeProvider>
  </>,
);
