import React from 'react';
import logobeach from '../../assets/images/logobeach.png';
import { AlignJustify } from 'lucide-react';
import { SquareMenu } from 'lucide-react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg custom-header">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logobeach} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        </a>
        <button className="navbar-toggler d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <AlignJustify size={28} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            <a className="nav-link" href="/forecast">Forecast</a>
            <a className="nav-link" href="/live">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
