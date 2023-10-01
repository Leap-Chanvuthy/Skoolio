import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StudentContextProvider } from './contexts/StudentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StudentContextProvider>
      <App />
    </StudentContextProvider>
);

