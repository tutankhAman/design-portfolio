import React from 'react';
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn, FaGithub, FaHeart } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>Made with <FaHeart className="heart-icon" /> by Aman</p>
          <p className="year">© 2025</p>
        </div>
        <div className="footer-links">
          <a href="mailto:amanaziz2020@gmail.com" aria-label="Email">
            <SiGmail />
          </a>
          <a href="https://www.linkedin.com/aman-aziz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://www.github.com/tutankhAman" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
