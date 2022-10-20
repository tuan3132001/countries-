import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './Components/ThemeContext/themeContext';
import store from './Components/Store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


