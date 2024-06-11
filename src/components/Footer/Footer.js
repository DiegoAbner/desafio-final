import React from 'react';
import './Footer.css';
import linkedinLogo from '../../images/linkedin-logo.png';
import githubLogo from '../../images/github-logo.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; 2024 Diego Abner. Todos os direitos reservados.</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/abnerdiego/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/DiegoAbner" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
