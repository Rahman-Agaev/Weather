import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes';
import { Provider } from 'react-redux'
import './index.css';


import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
