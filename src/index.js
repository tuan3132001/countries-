import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './Components/ThemeContext/themeContext';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


