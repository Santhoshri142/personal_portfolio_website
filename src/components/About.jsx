import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { personalInfo, education } from '../utils/constants';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="section">
      <div className="section-heading" data-aos="fade-up">
        <h2>About Me</h2>
        <p>{personalInfo.about}</p>
      </div>
      <div className="timeline">
        {education.map((edu, index) => (
          <div className="timeline-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{edu.degree}</h3>
            <p className="timeline-school">{edu.institution}</p>
            <p className="timeline-meta">{edu.score} • {edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
