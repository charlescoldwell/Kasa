import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:locationId" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/Error" />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
