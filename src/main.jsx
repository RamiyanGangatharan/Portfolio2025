import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './css/main.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS for layout and styling
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS for interactivity (e.g., dropdowns)

/**
 * Entry point of the React application.
 * 
 * - Wraps the app with `<BrowserRouter>` to enable client-side routing.
 * - Uses React's StrictMode to highlight potential issues in development.
 * - Mounts the app to the DOM element with ID 'root'.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
