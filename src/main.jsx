import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <App />
    <Footer />
  </Router>
);
