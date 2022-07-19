import React from 'react';
function Footer() {

    return (
        <footer>
          <img
            src={require(`../../assets/misc/github.png`)}
            alt="GitHub Logo"
            className="footerimg mx-1"
            key="GitHub Logo"
            style={{ width: 50, height: 50 }}
            href="https://github.com/randronaco1027"
          />
          <img
            src={require(`../../assets/misc/linkedin.png`)}
            alt="LinkedIn Logo"
            className="footerimg mx-1"
            key="LinkedIn Logo"
            style={{ width: 50, height: 50 }}
            href="https://www.linkedin.com/in/ray-andronaco-jr-8729503a/"
          />
          <img
            src={require(`../../assets/misc/stack.png`)}
            alt="Stack Overflow Logo"
            className="footerimg mx-1"
            key="Stack Overflow Logo"
            style={{ width: 50, height: 50 }}
            href="https://stackoverflow.com/users/17970740/randronaco"
          />
        </footer>
    );
}

export default Footer;