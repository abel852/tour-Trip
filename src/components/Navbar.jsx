import React, { useState, useEffect } from 'react';
import { FaHiking, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
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
          <div className="logo">
            <FaHiking /> Ethio<span>Hiking</span>
          </div>

          
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#tours" onClick={closeMenu}>Tours</a></li>
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