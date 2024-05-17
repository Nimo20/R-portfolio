import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Route>
            <Route exact path="/" component={AboutMe} />
            <Route path="/coportfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />

          </Route>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
