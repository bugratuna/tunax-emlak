import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; // HashRouter kullanıldı
import App from './App.jsx'; // Ana App bileşenini import et
import './index.css'
import {HelmetProvider} from "react-helmet-async";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <Router>
                <App />
            </Router>
        </HelmetProvider>
    </React.StrictMode>,
);