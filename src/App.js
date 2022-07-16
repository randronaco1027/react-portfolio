import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
// import Resume from './components/Resume'
// import ContactForm from './components/Contact';



function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <>
          <Portfolio></Portfolio>
          <About></About>
        </>
      </main>
      <footer>
        <img
          src={require(`./assets/github.png`)}
          alt="GitHub Logo"
          className="img-thumbnail mx-1"
          key="GitHub Logo"
          style={{ width: 50, height: 50 }}
          href="https://github.com/randronaco1027"
        />
        <img
          src={require(`./assets/linkedin.png`)}
          alt="LinkedIn Logo"
          className="img-thumbnail mx-1"
          key="LinkedIn Logo"
          style={{ width: 50, height: 50 }}
          href="https://www.linkedin.com/in/ray-andronaco-jr-8729503a/"
        />
      </footer>
    </div>
  );
}

export default App;