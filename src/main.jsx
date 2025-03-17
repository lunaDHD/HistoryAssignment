import { createRoot } from 'react-dom/client'

import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import './index.css';
import './flags.css';
import App from './App.jsx';
import * as React from 'react';
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PrimeReactProvider>
            <App />
        </PrimeReactProvider>
    </React.StrictMode>
)
