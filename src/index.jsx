import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './props';
import AppReact from './AppReact'
import Evento from './components/Evento';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppReact/>
    {/* <Evento/> */}
  </React.StrictMode>
);


