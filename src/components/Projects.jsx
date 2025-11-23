import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects } from '../utils/constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleFlip = (projectId) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  return (
    <section id="projects" className="section">
      <div className="section-heading" data-aos="fade-up">
        <h2>Projects</h2>
        <p>Showcasing my work and technical expertise</p>
      </div>
      <div className="card-grid">
        {projects.map((project, index) => {
          const isFlipped = flippedCards.has(project.id);
          return (
            <div
              className="project-card card-flip"
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`card-front ${isFlipped ? 'card-flipped' : ''}`}>
                <header className="project-heading">
                  <h3>{project.title}</h3>
                  {project.type && <span>{project.type}</span>}
                </header>
                <div className="tech-tags">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem' }}>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-btn"
                      style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.type === 'github' ? (
                        <>
                          <FaGithub style={{ marginRight: '0.5rem' }} />
                          View on GitHub
                        </>
                      ) : (
                        <>
                          <FaExternalLinkAlt style={{ marginRight: '0.5rem' }} />
                          View Project
                        </>
                      )}
                    </a>
                  )}
                  <button
                    className="flip-btn"
                    onClick={() => handleFlip(project.id)}
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
                    {isFlipped ? 'View Details' : 'View Description'}
                  </button>
                </div>
              </div>
              <div className={`card-back ${isFlipped ? 'card-flipped' : ''}`}>
                <p className="project-impact" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  {project.description}
                </p>
                <button
                  className="flip-btn"
                  onClick={() => handleFlip(project.id)}
                  style={{
                    marginTop: 'auto',
                    paddingTop: '1rem',
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
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
