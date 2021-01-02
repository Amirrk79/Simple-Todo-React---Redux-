import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import MyStore from './Redux/Store';

ReactDOM.render(
  <Provider store={MyStore}>
    <App />
    </Provider>
, 
  document.getElementById('root')
);



