import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainPage from './main';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
    <Route path="/" component={App} />
    </Routes>
    
  </Router>,
);

reportWebVitals();
