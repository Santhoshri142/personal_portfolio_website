import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { certifications } from '../utils/constants';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleCardClick = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="section">
      <div className="section-heading" data-aos="fade-up">
        <h2>Certifications</h2>
        <p>Professional certifications and achievements</p>
      </div>
      <div className="card-grid">
        {certifications.map((cert, index) => (
          <div
            className="project-card"
            key={cert.id}
            data-aos="fade-up"
            data-aos-delay={index * 50}
            onClick={() => handleCardClick(cert)}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ marginBottom: '1rem', borderRadius: '12px', overflow: 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '250px', background: 'rgba(255, 255, 255, 0.02)' }}>
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                  style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'contain', borderRadius: '12px' }}
                />
              ) : null}
              <div
                style={{
                  display: cert.image ? 'none' : 'flex',
                  width: '100%',
                  minHeight: '250px',
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  flexDirection: 'column',
                  gap: '10px',
                  borderRadius: '12px'
                }}
              >
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <span>Certificate</span>
              </div>
            </div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{cert.name}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{cert.issuer}</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {cert.date} {cert.score && `• ${cert.score}`}
            </p>
          </div>
        ))}
      </div>

      {showModal && selectedCert && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem',
            cursor: 'pointer'
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              background: 'rgba(12, 7, 18, 0.95)',
              borderRadius: '1.5rem',
              padding: '2rem',
              maxWidth: '90%',
              maxHeight: '90%',
              overflow: 'auto',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              cursor: 'default'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ color: 'var(--text-primary)' }}>{selectedCert.name}</h3>
              <button
                onClick={handleCloseModal}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                ×
              </button>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              <strong>Issuer:</strong> {selectedCert.issuer}
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              <strong>Date:</strong> {selectedCert.date} {selectedCert.score && `• Score: ${selectedCert.score}`}
            </p>
            {selectedCert.image ? (
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain', borderRadius: '12px', display: 'block' }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  minHeight: '300px',
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  flexDirection: 'column',
                  gap: '15px'
                }}
              >
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <span>Certificate Image</span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
