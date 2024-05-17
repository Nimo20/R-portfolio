
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>

        <main>

          {/* main page content*/}

          <Route exact path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/project" element={Portfolio} />
          <Route path="/contact" element={Contact} />
          <Route path="/footer" element={Footer} />
        </main>

      </div>
    </Router>
  );
};

export default App;