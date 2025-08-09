import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styled/styles.css';
import { Provider } from 'react-redux';
import { store } from './store/index'

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
