import React from 'react';
function Footer() {
  // Display icons at foot of page for GitHub, LinkedIn and Stack Overflow pages
  return (
    <footer className='py-5'>
      <div className='footer-info'>
        <h5>Ray Andronaco</h5>
        <p>Hoboken, NJ</p>
        <a href="mailto:randronaco1027@gmail.com">Randronaco1027@gmail.com</a>
      </div>
      <div className="footer-img">
        <img
          src={require(`../../assets/misc/github.png`)}
          alt="GitHub Logo"
          className="footerimg"
          key="GitHub Logo"
          style={{ width: 50, height: 50 }}
          onClick={() => window.open("https://github.com/randronaco1027", "_blank")}
        />
        <img
          src={require(`../../assets/misc/linkedin.png`)}
          alt="LinkedIn Logo"
          className="footerimg"
          key="LinkedIn Logo"
          style={{ width: 50, height: 50 }}
          onClick={() => window.open("https://www.linkedin.com/in/ray-andronaco-jr-8729503a/", "_blank")}
        />
      </div>
    </footer>
  );
}

export default Footer;