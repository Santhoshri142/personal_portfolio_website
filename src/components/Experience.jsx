import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { experiences } from '../utils/constants';
import { FaReact, FaCloud, FaCode, FaDatabase, FaBrain, FaJs, FaHtml5, FaCss3Alt, FaServer } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiTensorflow } from 'react-icons/si';

const Experience = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleFlip = (expId) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(expId)) {
        newSet.delete(expId);
      } else {
        newSet.add(expId);
      }
      return newSet;
    });
  };

  // Get relevant icons for each internship
  const getExperienceIcons = (exp) => {
    const title = exp.title.toLowerCase();
    const role = exp.role.toLowerCase();
    
    if (title.includes('ibm') || role.includes('generative ai') || role.includes('cloud')) {
      return [SiTensorflow, FaServer, FaCloud, FaBrain];
    } else if (title.includes('citizen developer') || role.includes('low-code') || role.includes('no-code')) {
      return [FaCode, FaReact, SiJavascript];
    } else if (title.includes('full stack') || role.includes('full stack')) {
      return [FaReact, SiJavascript, FaHtml5, FaCss3Alt, SiMysql, SiMongodb, SiNodedotjs];
    }
    return [];
  };

  return (
    <section id="experience" className="section">
      <div className="section-heading" data-aos="fade-up">
        <h2>Internship Experience</h2>
        <p>Professional journey and learning experiences</p>
      </div>
      <div className="experience-stack">
        {experiences.map((exp, index) => {
          const isFlipped = flippedCards.has(exp.id);
          return (
            <div
              key={exp.id}
              className="experience-card card-flip"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`card-front ${isFlipped ? 'card-flipped' : ''}`}>
                <div className="experience-head">
                  <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{exp.title}</h3>
                  <span className="experience-meta">{exp.period}</span>
                </div>
                <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {exp.role}
                </p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  {exp.organization}
                </p>
                <div className="experience-tech-icons" style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.75rem', 
                  marginBottom: '1rem',
                  alignItems: 'center'
                }}>
                  {getExperienceIcons(exp).map((Icon, idx) => (
                    <div
                      key={idx}
                      className="tech-icon"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(147, 73, 255, 0.1)',
                        border: '1px solid rgba(147, 73, 255, 0.2)',
                        color: 'var(--primary)',
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
                  <button
                    className="flip-btn"
                    onClick={() => handleFlip(exp.id)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(147, 73, 255, 0.1)',
                      border: '1px solid rgba(147, 73, 255, 0.3)',
                      borderRadius: '0.5rem',
                      color: 'var(--primary)',
                      cursor: 'pointer',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      fontSize: '0.9rem'
                    }}
                  >
                    View Certificate & Details
                  </button>
                </div>
              </div>
              <div className={`card-back ${isFlipped ? 'card-flipped' : ''}`}>
                <div className="card-back-content">
                  {exp.certificateImage && (
                    <div className="internship-certificate">
                      <img
                        src={exp.certificateImage}
                        alt={`${exp.title} Certificate`}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="certificate-placeholder" style={{ display: 'none' }}>
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        <span>Certificate</span>
                      </div>
                    </div>
                  )}
                  {exp.certificateImages && exp.certificateImages.length > 0 && (
                    <div className="internship-certificate">
                      {exp.certificateImages.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${exp.title} Certificate ${idx + 1}`}
                          style={{ width: '100%', marginBottom: idx < exp.certificateImages.length - 1 ? '1rem' : '0' }}
                        />
                      ))}
                    </div>
                  )}
                  {exp.description && (
                    <div className="card-description" style={{ marginTop: '1.5rem' }}>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                        {exp.description}
                      </p>
                    </div>
                  )}
                  <button
                    className="flip-btn"
                    onClick={() => handleFlip(exp.id)}
                    style={{
                      marginTop: '1.5rem',
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(147, 73, 255, 0.1)',
                      border: '1px solid rgba(147, 73, 255, 0.3)',
                      borderRadius: '0.5rem',
                      color: 'var(--primary)',
                      cursor: 'pointer',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      fontSize: '0.9rem'
                    }}
                  >
                    Back to Front
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
