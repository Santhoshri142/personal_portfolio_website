import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { contactInfo, socialProfiles } from '../utils/constants';
import { FaWhatsapp, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      const subject = encodeURIComponent(`Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
      setAlertMessage('Email client opened. Please send your message.');
      setAlertVariant('info');
      setShowAlert(true);
      setIsSubmitting(false);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    try {
      await emailjs.send(serviceID, templateID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: contactInfo.email
      }, publicKey);

      setAlertMessage('Message sent successfully! I will get back to you soon.');
      setAlertVariant('success');
      setShowAlert(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowAlert(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
      
      setAlertMessage('EmailJS not configured. Opening your email client instead.');
      setAlertVariant('info');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialIconMap = {
    FaGithub: FaGithub,
    FaLinkedin: FaLinkedin,
    FaHackerrank: FaHackerrank,
    SiLeetcode: SiLeetcode
  };

  return (
    <section id="contact" className="section">
      <div className="section-heading" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>Let's connect and discuss opportunities</p>
      </div>
      <div className="contact-grid">
        <div className="contact-card" data-aos="fade-up">
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Get In Touch</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="contact-link-stack" style={{ marginBottom: '1.5rem' }}>
            <div className="contact-phone" style={{ marginBottom: '1rem' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Phone</p>
              <a href={contactInfo.phoneLink} style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}>
                {contactInfo.phone}
              </a>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Email</p>
              <a href={contactInfo.emailLink} className="contact-link">
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="contact-actions" style={{ marginBottom: '1.5rem' }}>
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <span className="whatsapp-icon">
                <FaWhatsapp />
              </span>
              WhatsApp
            </a>
            <a
              href={contactInfo.phoneLink}
              className="primary-btn"
            >
              <FaPhone style={{ marginRight: '0.5rem' }} />
              Call
            </a>
            <a
              href={contactInfo.emailLink}
              className="secondary-btn"
            >
              <FaEnvelope style={{ marginRight: '0.5rem' }} />
              Email
            </a>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.1rem' }}>Connect with me</h4>
            <div className="contact-actions social">
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
            </div>
          </div>
        </div>

        <div className="contact-form" data-aos="fade-up" data-aos-delay="100">
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Send a Message</h3>
          {showAlert && (
            <div
              style={{
                padding: '1rem',
                borderRadius: '1rem',
                marginBottom: '1rem',
                background: alertVariant === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                border: `1px solid ${alertVariant === 'success' ? 'rgba(34, 197, 94, 0.5)' : 'rgba(59, 130, 246, 0.5)'}`,
                color: 'var(--text-primary)'
              }}
            >
              {alertMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <label>
              Name *
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </label>
            <label>
              Email *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </label>
            <label>
              Message *
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message here..."
              />
            </label>
            <button type="submit" className="primary-btn" disabled={isSubmitting} style={{ width: '100%' }}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <p className="form-note">
              * All fields are required. Your message will be sent to my email.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
