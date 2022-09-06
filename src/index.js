import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './theme';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={mainTheme}>
          <App tab='home' />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </>,
);
