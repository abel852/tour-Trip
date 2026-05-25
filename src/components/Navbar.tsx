import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHiking, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'active' : ''} ${isOpen ? 'mobile-nav-active' : ''}`}>
        <div className="container nav-flex">
          <Link to="/" className="logo" onClick={closeMenu}>
            <FaHiking /> Ethio<span>Hiking</span>
          </Link>

          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/tours" onClick={closeMenu}>Tours</Link></li>
            <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            <li className="mobile-only">
              <button className="nav-btn">Book Adventure</button>
            </li>
          </ul>

          <div className="nav-right">
            <button className="nav-btn hide-mobile">Book Adventure</button>
            <div className="menu-icon" onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
      {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
