import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';

import Router from './router/Router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import ThemeProvider from './AuthProvider/ThemeProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      
    <AuthProvider routes={<RouterProvider router={Router}></RouterProvider>} />

    </ThemeProvider>
    
  </StrictMode>
)
