import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHiking, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Tours', to: '/tours' },
    { label: 'About', to: '/about' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Blog', to: '/blog' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Contact', to: '/contact' },
  ];

  // Helper to determine text color based on background
  const getTextColor = (isActive: boolean) => {
    if (scrolled || isOpen) {
      return isActive ? 'text-primary font-bold' : 'text-secondary hover:text-primary';
    }
    return isActive ? 'text-primary font-bold' : 'text-white hover:text-white';
  };

  const getLogoColor = () => {
    if (scrolled || isOpen) return 'text-secondary';
    return 'text-white';
  };

  return (
    <>
      <nav className={`navbar-modern ${scrolled ? 'scrolled' : ''} ${isOpen ? 'mobile-open' : ''}`}>
        <div className="container flex items-center justify-between h-20 md:h-24 transition-standard">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center text-white group-hover:bg-primary-dark transition-all duration-300 shadow-lg"
            >
              <FaHiking size={24} />
            </motion.div>
            <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase transition-colors duration-300 ${getLogoColor()}`}>
              Ethio<span className="text-primary">Hiking</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`nav-link text-xs uppercase tracking-[0.2em] font-black ${getTextColor(isActive)}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className={`hidden md:flex btn-primary !py-3 !px-8 !text-xs uppercase tracking-widest shadow-xl transition-all duration-500 border-2 ${
                !scrolled 
                  ? 'bg-primary !text-white border-primary hover:!text-white hover:!bg-primary' 
                  : 'bg-white !text-secondary border-secondary hover:!text-secondary hover:!bg-white'
              }`}
            >
              Book Now
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-3 rounded-2xl transition-all ${
                scrolled ? 'text-secondary bg-mint-50 hover:bg-mint-100' : 'text-white bg-white/10 hover:bg-white/20'
              }`}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-mint-100 overflow-hidden"
            >
              <ul className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`block text-lg font-bold p-2 rounded-xl transition-colors ${
                        location.pathname === link.to
                          ? 'bg-mint-50 text-primary'
                          : 'text-secondary hover:bg-mint-50 hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4 border-t border-gray-100">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full btn-primary"
                  >
                    Book Now
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {isOpen && <div className="fixed inset-0 bg-secondary/50 backdrop-blur-sm z-[40]" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Navbar;
