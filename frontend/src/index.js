import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("hello world")
root.render(
  <Provider store ={store}>
    <App />
  </Provider>
);
reportWebVitals();
