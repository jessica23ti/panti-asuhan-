import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <i className="fa-solid fa-hand-holding-heart"></i>
          <span className="logo-text">Panti Asuhan Amanah</span>
        </a>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#" className="nav-link">Beranda</a>
          <a href="#" className="nav-link">Tentang Kami</a>
          <a href="#" className="nav-link">Program</a>
          <a href="#" className="nav-link">Kontak</a>
        </div>

        <div className="nav-actions">
          <button className="btn btn-primary">Donasi Sekarang</button>
        </div>
        
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
