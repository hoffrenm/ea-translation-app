import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider, reducer } from './state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider reducer={reducer}>
        <App />
    </StateProvider>
  </React.StrictMode>
);
