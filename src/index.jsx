import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './props';
import AppTest from './03-Entendendojsx';
import Evento from './components/Evento';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppTest/>
    {/* <Evento/> */}
  </React.StrictMode>
);


