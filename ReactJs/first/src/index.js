import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App name="Rameh" age="30" />
    <App name="Suresh" age="50" />
    <App name="Suresh" age="40" />
    <App name="Rakesh" age="10" />
  </>

  

);