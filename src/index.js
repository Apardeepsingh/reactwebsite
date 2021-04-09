import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';   
import App from './App'

ReactDom.render(
  <BrowserRouter>                            
    <App />
  </BrowserRouter>,
  document.getElementById('root')
); 