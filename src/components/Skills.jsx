import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { skills } from '../utils/constants';
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
  FaCloud
} from 'react-icons/fa';
import {
  SiC,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiTensorflow,
  SiOpencv,
  SiThingiverse
} from 'react-icons/si';

const iconMap = {
  SiJava: FaCode,
  SiC: SiC,
  SiJavascript: SiJavascript,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaBootstrap: FaBootstrap,
  FaReact: FaReact,
  SiMysql: SiMysql,
  SiMongodb: SiMongodb,
  SiIbm: FaCloud,
  SiTensorflow: SiTensorflow,
  SiOpencv: SiOpencv,
  FaGitAlt: FaGitAlt,
  FaGithub: FaGithub,
  FaFigma: FaFigma,
  FaCode: FaCode,
  SiThingiverse: SiThingiverse
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderSkillCard = (skill, index) => {
    const IconComponent = iconMap[skill.icon] || FaCode;
    return (
      <div className="skill-card" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
        <div style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
          <IconComponent />
        </div>
        <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>{skill.name}</h4>
      </div>
    );
  };

  return (
    <section id="skills" className="section">
      <div className="section-heading" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Technologies and tools I work with</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Programming Languages</h3>
        <div className="skill-category-grid">
          {skills.programming.map((skill, index) => renderSkillCard(skill, index))}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Frontend Technologies</h3>
        <div className="skill-category-grid">
          {skills.frontend.map((skill, index) => renderSkillCard(skill, index + skills.programming.length))}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Cloud & Databases</h3>
        <div className="skill-category-grid">
          {skills.databases.map((skill, index) => renderSkillCard(skill, index + skills.programming.length + skills.frontend.length))}
          {skills.cloud.map((skill, index) => renderSkillCard(skill, index + skills.programming.length + skills.frontend.length + skills.databases.length))}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>AI/ML</h3>
        <div className="skill-category-grid">
          {skills.aiMl.map((skill, index) => renderSkillCard(skill, index + skills.programming.length + skills.frontend.length + skills.databases.length + skills.cloud.length))}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Tools & Platforms</h3>
        <div className="skill-category-grid">
          {skills.tools.map((skill, index) => renderSkillCard(skill, index + skills.programming.length + skills.frontend.length + skills.databases.length + skills.cloud.length + skills.aiMl.length))}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Soft Skills</h3>
        <div className="skills-grid">
          {skills.softSkills.map((skill, index) => (
            <div key={index} className="skill-pill" data-aos="fade-up" data-aos-delay={index * 50}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
