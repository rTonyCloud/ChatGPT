import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <React.Suspense fallback={<div>Loading...</div>}>
            <ThemeProvider theme={Theme}>
                <App />
            </ThemeProvider>
        </React.Suspense>
    </React.StrictMode>
);
