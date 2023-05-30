import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ConfigRouter from './routers/ConfigRouter';
import NavbarCommponent from './component/NavbarCommponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarCommponent/>
    <ConfigRouter />
  </React.StrictMode>
);

reportWebVitals();
