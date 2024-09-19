import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo1.png'; 

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log('Menu button clicked, menuOpen:', !menuOpen); 
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
        Lsadvogados
      </div>
      <div className="nav-content">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
