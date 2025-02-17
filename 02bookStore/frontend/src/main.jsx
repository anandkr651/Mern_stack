import App from './App.jsx'
import React from 'react';
import './index.css'
import ReactDOM from "react-dom/client";
import AuthProvider from './context/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </React.StrictMode>
  
)
