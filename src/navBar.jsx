import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/home" onClick={closeMenu}>Portfolio</Link>
        </div>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/home" className="navbar-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/resume" className="navbar-link" onClick={closeMenu}>Resume</Link>
          </li>
          <li className="navbar-item">
            <Link to="/skillhub" className="navbar-link" onClick={closeMenu}>SkillHub</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Certificates" className="navbar-link" onClick={closeMenu}>Certificates</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Projects" className="navbar-link" onClick={closeMenu}>Projects</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={closeMenu}>About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={closeMenu}>Contact</Link>
          </li>
          
          <li className="navbar-item">
            <Link to="/login" className="navbar-link" onClick={closeMenu}>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar