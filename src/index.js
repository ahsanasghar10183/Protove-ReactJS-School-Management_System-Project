import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'react-calendar/dist/Calendar.css';
import './css/index.scss';
import App from './App';
ReactDOM.render(
  <>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);
