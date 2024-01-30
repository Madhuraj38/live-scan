import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import AboutUs from './components/pages/About';
import ContactUs from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
