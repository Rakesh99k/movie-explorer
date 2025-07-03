import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { WatchlistProvider } from './context/WatchlistContext';


ReactDOM.createRoot(document.getElementById('root')).render(
 <WatchlistProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</WatchlistProvider>
);
