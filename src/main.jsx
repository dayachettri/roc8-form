import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeProvider } from './context/DarkModeContext';
import './index.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
