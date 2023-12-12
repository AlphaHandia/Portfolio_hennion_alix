import './sass/main.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import ThemeContext from './components/theme-switch/ThemeContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeContext.Provider value={{}}>
      <App />
    </ThemeContext.Provider>
  </Provider>
);
