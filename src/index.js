import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { baseTheme } from './assets/theme.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme(baseTheme)

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />

  </ThemeProvider>
);
