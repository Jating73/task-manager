import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SideBarContextProvider } from './context/SideBarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SideBarContextProvider>
        <App />
      </SideBarContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
