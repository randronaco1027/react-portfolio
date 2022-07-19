import React from 'react';
function Footer() {
// Display icons at foot of page for GitHub, LinkedIn and Stack Overflow pages
    return (
        <footer>
          <img
            src={require(`../../assets/misc/github.png`)}
            alt="GitHub Logo"
            className="footerimg mx-1"
            key="GitHub Logo"
            style={{ width: 50, height: 50 }}
            onClick={()=> window.open("https://github.com/randronaco1027", "_blank")}
          />
          <img
            src={require(`../../assets/misc/linkedin.png`)}
            alt="LinkedIn Logo"
            className="footerimg mx-1"
            key="LinkedIn Logo"
            style={{ width: 50, height: 50 }}
            onClick={()=> window.open("https://www.linkedin.com/in/ray-andronaco-jr-8729503a/", "_blank")}
          />
          <img
            src={require(`../../assets/misc/stack.png`)}
            alt="Stack Overflow Logo"
            className="footerimg mx-1"
            key="Stack Overflow Logo"
            style={{ width: 50, height: 50 }}
            onClick={()=> window.open("https://stackoverflow.com/users/17970740/randronaco", "_blank")}
          />
        </footer>
    );
}

export default Footer;