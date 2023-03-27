import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap/dist/css/bootstrap.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";       
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";    

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
