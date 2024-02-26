import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store/ui/StoreProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
    <App />
    </StoreProvider>,
);
reportWebVitals();
