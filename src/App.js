import React from 'react';
import Home from './components/Home'
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'
import ContactForm from './components/Contact';
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
        <footer>
          <img
            src={require(`./assets/misc/github.png`)}
            alt="GitHub Logo"
            className="img-thumbnail mx-1"
            key="GitHub Logo"
            style={{ width: 50, height: 50 }}
            href="https://github.com/randronaco1027"
          />
          <img
            src={require(`./assets/misc/linkedin.png`)}
            alt="LinkedIn Logo"
            className="img-thumbnail mx-1"
            key="LinkedIn Logo"
            style={{ width: 50, height: 50 }}
            href="https://www.linkedin.com/in/ray-andronaco-jr-8729503a/"
          />
        </footer>
      </div>
    </Router>
    // <div>
    //   <Nav
    //     contactSelected={contactSelected}
    //     setContactSelected={setContactSelected}
    //   ></Nav>
    //   <main>
    //     <>
    //     {!contactSelected ? (
    //       <>
    //         <Portfolio></Portfolio>
    //         <Resume></Resume>
    //         <About></About>
    //       </>
    //     ) : (
    //       <ContactForm></ContactForm>
    //     )}
    //     </>
    //   </main>
    //   <footer>
    //     <img
    //       src={require(`./assets/github.png`)}
    //       alt="GitHub Logo"
    //       className="img-thumbnail mx-1"
    //       key="GitHub Logo"
    //       style={{ width: 50, height: 50 }}
    //       href="https://github.com/randronaco1027"
    //     />
    //     <img
    //       src={require(`./assets/linkedin.png`)}
    //       alt="LinkedIn Logo"
    //       className="img-thumbnail mx-1"
    //       key="LinkedIn Logo"
    //       style={{ width: 50, height: 50 }}
    //       href="https://www.linkedin.com/in/ray-andronaco-jr-8729503a/"
    //     />
    //   </footer>
    // </div>
  );
}

export default App;