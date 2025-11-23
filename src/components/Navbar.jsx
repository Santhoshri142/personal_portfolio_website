import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { resumeLink } from '../utils/constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="site-nav">
      <a href="#home" className="logo">
        SANTHOSHRI
      </a>
      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick}>
          Home
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick}>
          About
        </Link>
        <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick}>
          Skills
        </Link>
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick}>
          Projects
        </Link>
        <Link to="experience" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick}>
          Experience
        </Link>
        <Link to="certifications" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick}>
          Certifications
        </Link>
        <Link to="achievements" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick}>
          Achievements
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick}>
          Contact
        </Link>
      </div>
      <a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="primary-btn nav-resume-btn"
        onClick={handleNavClick}
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
