import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { pageview } from './utils/gtag';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// send initial pageview (safe: helper checks window.gtag exists)
pageview(window.location.pathname + window.location.search);
