// src/main.tsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import React from 'react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider> 
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);