import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />

        <main>
          {/* Routes for different pages */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;