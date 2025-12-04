import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';
import { SiAmazonaws } from 'react-icons/si';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Animated background particles */}
      <div className="nav-particles">
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
      </div>

      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <div className="logo-icon">
            <SiAmazonaws />
            <div className="icon-glow"></div>
          </div>
          <div className="logo-content">
            <span className="logo-text">Chetan Namane</span>
            <span className="logo-subtitle">Cloud Engineer</span>
          </div>
        </div>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              <span className="link-text">{item.label}</span>
              <span className="link-dot"></span>
            </button>
          ))}
          
          <div className="nav-indicator"></div>
        </div>

        <div className="nav-actions">
          <a 
            href="https://github.com/chetan080808" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-action-btn"
          >
            <FaCode />
            <span>GitHub</span>
          </a>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
