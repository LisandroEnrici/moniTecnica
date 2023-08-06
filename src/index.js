import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { baseTheme } from './assets/theme.js'
import HomePage from './pages/homepage.jsx';

const theme = createTheme(baseTheme)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HomePage/>
  </ThemeProvider>,
  document.getElementById('root')
);
