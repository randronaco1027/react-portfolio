import React from 'react';
// import Home from './components/Home'
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'
import ContactForm from './components/Contact';
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Nav />
        <div className="container">
          <Routes>
            <Route
              path="/"
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;