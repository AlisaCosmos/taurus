
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'


import "./styles/common.scss";
import './index.scss';
import App from './App';
import {store} from './redux/store';

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
