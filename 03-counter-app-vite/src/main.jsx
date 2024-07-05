import React from 'react';
import ReactDOM from 'react-dom/client';

//import { HelloWorlfApp } from './HelloWorlfApp';
// import { FirtsApp } from './FistApp';

import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById('root') ) .render(
    <React.StrictMode>
        <CounterApp value = { 512 } />
    </React.StrictMode>
);



//Para correr el proyecto
//yarn dev
