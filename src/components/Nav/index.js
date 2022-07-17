import React from 'react';

function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2 class="header">
        <a data-testid="link" href="/">
          Ray Andronaco
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Portfolio</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
