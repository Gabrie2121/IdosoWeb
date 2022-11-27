import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './providers/auth';
import { IdosoProvider } from './providers/idoso';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <IdosoProvider>
        <App />
      </IdosoProvider>
    </AuthProvider>
  </React.StrictMode>
);
