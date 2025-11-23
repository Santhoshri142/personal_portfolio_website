import React from 'react';
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';
import { personalInfo, resumeLink } from '../utils/constants';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-copy" data-aos="fade-up">
          <p className="eyebrow">Welcome</p>
          <h1>{personalInfo.name}</h1>
          <p className="intro">{personalInfo.about}</p>
          <div className="hero-tagline" style={{ marginBottom: '1rem', minHeight: '60px' }}>
            <ReactTyped
              strings={[
                'AI-Driven Problem Solver',
                'Full Stack Developer',
                'IoT & ML Enthusiast',
                'Creative Technologist'
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>
          <div className="hero-actions">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Download Resume
            </a>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="secondary-btn"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-panel" data-aos="fade-up" data-aos-delay="200">
          <div className="panel-card gradient">
            
            {/* <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Quick Stats</h3> */}
            <div className="profile-image-container">
              <img 
                src="/images/profile/profile.jpg" 
                alt="Santhoshri S" 
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="hero-stats">
              
              <div>
                <span>8.19</span>
                <p>CGPA</p>
              </div>
              <div>
                <span>4+</span>
                <p>Projects</p>
              </div>
              <div>
                <span>3+</span>
                <p>Intern</p>
              </div>
              <div>
                <span>8+</span>
                <p>Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
