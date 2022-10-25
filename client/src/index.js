import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Brand from './app/Brand'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App />
        <Brand />
  </React.StrictMode>
);
