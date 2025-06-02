import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';  // jouw CSS bestand

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      {/* Hamburger button */}
      <div className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <MenuIcon style={{ color: 'white', fontSize: '2rem' }} />
      </div>

      {/* Menu */}
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/MapOverzicht">Map</Link></li>
        <li><Link to="/about">Over Ons</Link></li>
      </ul>

      <div className="nav-text">
        <div className="navbar-brand"><h2>Schaaktafels.nl</h2></div>
        <p className='nav-subtext'>Vind openbare schaaktafels in heel het land</p>
      </div>
    </nav>
  );
}
