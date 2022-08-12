import React from 'react';
import AppNavBar from './components/Nav';
import Home from './components/Home'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'
import ContactForm from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Routes to redirect user to separate pages without reloading page
function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <AppNavBar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/portfolio"
              element={<Portfolio />}
            />
            <Route
              path="/resume"
              element={<Resume />}
            />
            <Route
              path="/contact"
              element={<ContactForm />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;