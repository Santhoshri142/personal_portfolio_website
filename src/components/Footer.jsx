import React from 'react';
import { Link } from 'react-scroll';
import { socialProfiles } from '../utils/constants';
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaArrowUp
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIconMap = {
    FaGithub: FaGithub,
    FaLinkedin: FaLinkedin,
    FaHackerrank: FaHackerrank,
    SiLeetcode: SiLeetcode
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        {socialProfiles.map((profile, index) => {
          const IconComponent = socialIconMap[profile.icon] || FaGithub;
          return (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
              title={profile.name}
            >
              <IconComponent />
            </a>
          );
        })}
        <button
          onClick={scrollToTop}
          className="secondary-btn"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
      <p>&copy; {new Date().getFullYear()} Santhoshri S. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
