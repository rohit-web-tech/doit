import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx';
import { GlobalContextProvider } from './context/GlobalContext.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </ThemeProvider>
  </Provider>,
);