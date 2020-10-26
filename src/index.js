import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, BrowserRouter } from 'react-router-dom'
import Login from './view/login/Login'

import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import Home from './view/home/Home';
import About from './view/home/About';
import User from './view/user/User';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);
