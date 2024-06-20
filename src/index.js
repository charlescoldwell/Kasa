import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './index.css';
import { createGlobalStyle } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

const GlobalStyle = createGlobalStyle`
    div {
        font-family: Montserrat;
    }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
