import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import statement
import App from './App';
import { AuthProvider } from './Contexts/AuthContext';
import './Styles/Index.css'; // Import the CSS file

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
