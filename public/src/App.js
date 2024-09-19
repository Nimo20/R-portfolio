import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <>

      <Navigation />
      {/* <Home /> */}

      <Routes>
        {/* Routes for different pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;