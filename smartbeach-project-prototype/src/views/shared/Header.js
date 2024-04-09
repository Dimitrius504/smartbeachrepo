import React from 'react';
import logobeach from '../../assets/images/logobeach.png';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg custom-header">
      <div className="container-fluid">
        <a className="navbar-brand" href="/landing">
          <img src={logobeach} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        </a>
        {/* Adjust the width value as needed to make the logo smaller */}
        {/* You can adjust the alt text and className according to your needs */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto-custom">
            <a className="nav-link active" aria-current="page" href="/landing">Home</a>
            <a className="nav-link" href="/forecast">Forecast</a>
            <a className="nav-link" href="/live">About</a>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;