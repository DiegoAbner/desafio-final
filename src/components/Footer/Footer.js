import React from 'react';
import linkedinLogo from '../../images/linkedin-logo.png';
import githubLogo from '../../images/github-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>© 2024 Abner Express. Todos os direitos reservados.</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/abnerdiego/">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a href="https://github.com/DiegoAbner">
          <img src={githubLogo} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

