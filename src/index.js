import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createTheme, ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#FF8A65' },
    secondary: { main: '#4DB6AC' },
    background: { default: '#FDF7F2', paper: '#FFFFFF' },
    error: { main: '#F44336' },
    text: { primary: '#333333', secondary: '#6D6D6D' },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    button: { textTransform: 'none', fontWeight: 500 },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #DDD', // Add a subtle bottom border for clarity
        },
        indicator: {
          backgroundColor: '#FF8A65', // Primary color for active tab indicator
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '1.2rem', // Larger font size for better readability
          padding: '16px 24px', // Increased padding for a bigger clickable area
          color: '#6D6D6D',
          '&.Mui-selected': {
            color: '#FF8A65', // Highlight active tab with primary color
          },
        },
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
