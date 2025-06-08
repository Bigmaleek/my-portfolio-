import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Mohammed Abdulmalik</h2>
        <p>Creating smooth, smart digital experiences</p>

        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <p className="footer-credit">© {new Date().getFullYear()} Mohammed Abdulmalik. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
