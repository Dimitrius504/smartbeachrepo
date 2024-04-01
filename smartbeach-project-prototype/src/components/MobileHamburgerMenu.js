import React, { useState } from 'react';

const MobileHamburgerMenu = () => {
// use useState to add a function to show/hide the lists when being clicked.
  const [opened, setOpened] = useState(false);

  return (
    <div className="hamburger-mobile-menu">
        {/* add a function to show/hide the lists when being clicked. */}
        <button className={`hamburger-menu-button ${opened ? 'opened' : ''}`} onClick={() => setOpened(!opened)}>
        <div className="hamburger-menu-option"></div>
        <div className="hamburger-menu-option"></div>
        <div className="hamburger-menu-option"></div>
      </button>
      {/* add a function when the hamburger menu is opened, show the contents inside it. */}
    
      {opened && (
        <div className="menu-items">
        <div><a href="/live">Live</a></div>
        <div><a href="/forecast">Forecast</a></div>
        <div><a href="/landing">Landing</a></div>
      </div>
      )}
    </div>
  );
};

export default MobileHamburgerMenu;
