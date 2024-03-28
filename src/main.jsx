import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render( // Use createRoot() from ReactDOM
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
