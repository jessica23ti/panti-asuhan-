import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <a href="#" className="footer-logo">
          <i className="fa-solid fa-hand-holding-heart"></i>
          <span className="logo-text">Panti Asuhan Amanah</span>
        </a>
        
        <div className="footer-links">
          <a href="#">Tentang Kami</a>
          <a href="#">Program</a>
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Syarat Ketentuan</a>
          <a href="#">Kontak</a>
          <a href="#">FAQ</a>
          <a href="#">Mitra Kami</a>
        </div>
        
        <div className="footer-copy">
          <p>&copy; 2026 Panti Asuhan Amanah. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
