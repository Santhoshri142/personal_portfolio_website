import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTrophy, FaMedal, FaPalette, FaCode, FaGraduationCap, FaRunning } from 'react-icons/fa';

const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const achievements = [
    {
      title: 'LinkedIn Skill Badge',
      description: 'HTML, CSS, and JavaScript',
      icon: FaCode
    }
  ];

  const sports = [
    {
      medal: 'Gold',
      event: 'Kho-Kho',
      level: 'Zonal Level',
      icon: FaTrophy
    },
    {
      medal: 'Silver',
      events: ['100m', '400m', 'Kho-Kho', 'Throw Ball'],
      level: 'Zonal Level',
      icon: FaMedal
    },
    {
      medal: 'Bronze',
      event: '4x100m Relay',
      level: 'Zonal Level',
      icon: FaMedal
    }
  ];

  const hobbies = [
    {
      title: 'Web Development',
      icon: FaCode
    },
    {
      title: 'Learning',
      icon: FaGraduationCap
    },
    {
      title: 'Oil Pastel & Pencil Art Drawing',
      icon: FaPalette
    }
  ];

  const getMedalColor = (medal) => {
    switch (medal.toLowerCase()) {
      case 'gold':
        return '#FFD700';
      case 'silver':
        return '#C0C0C0';
      case 'bronze':
        return '#CD7F32';
      default:
        return 'var(--primary)';
    }
  };

  return (
    <section id="achievements" className="section">
      <div className="section-heading" data-aos="fade-up">
        <h2>Achievements & Interests</h2>
        <p>Personal accomplishments and passions</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
          Achievements
        </h3>
        <div className="card-grid">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div className="about-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem', textAlign: 'center' }}>
                  <IconComponent />
                </div>
                <h4 style={{ color: 'var(--text-primary)', textAlign: 'center', marginBottom: '0.5rem' }}>
                  {achievement.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
          Sports Achievements
        </h3>
        <div className="card-grid">
          {sports.map((sport, index) => {
            const IconComponent = sport.icon;
            const medalColor = getMedalColor(sport.medal);
            return (
              <div className="about-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <IconComponent size={30} style={{ color: medalColor }} />
                    <h4 style={{ color: medalColor, margin: 0 }}>{sport.medal} Medal</h4>
                  </div>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {sport.events ? sport.events.join(', ') : sport.event}
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{sport.level}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
          Hobbies
        </h3>
        <div className="card-grid">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <div className="about-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem', textAlign: 'center' }}>
                  <IconComponent />
                </div>
                <h4 style={{ color: 'var(--text-primary)', textAlign: 'center' }}>{hobby.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
