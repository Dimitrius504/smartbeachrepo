
import logobeach from '../../assets/images/logobeach.png'; 

function Header() {

  return (
    <nav className="nav"> 
      <div className="logo-container">
        <img src={logobeach} alt="Logo" id="hero" />
      </div>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className= "nav-links">
        <li><a className="nav-link" href="/landing">Home</a></li>
        <li><a className="nav-link" href="forecast">Forecast</a></li>
        <li><a className="nav-link" href="/live">Live</a></li>
      </ul>
    </nav>
  );
};

export default Header;
