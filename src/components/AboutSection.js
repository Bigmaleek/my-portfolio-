import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from 'react-icons/fa';
import { SiFirebase, SiTailwindcss, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 color="#e44d26" size={24} /> },
  { name: 'CSS', icon: <FaCss3Alt color="#264de4" size={24} /> },
  { name: 'JavaScript', icon: <FaJs color="#f7df1e" size={24} /> },
  { name: 'React', icon: <FaReact color="#61dafb" size={24} /> },
  { name: 'Node.js', icon: <FaNodeJs color="#3c873a" size={24} /> },
  { name: 'Firebase', icon: <SiFirebase color="#ffcb2b" size={24} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" size={24} /> },
  { name: 'Git', icon: <FaGitAlt color="#f1502f" size={24} /> },
  { name: 'Figma', icon: <FaFigma color="#a259ff" size={24} /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47a248" size={24} /> },
];

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <p className="about-text">
        I'm Mohammed, a passionate software developer based in Lagos.
        I specialize in building responsive web applications using tools like React, Node.js, and Firebase.
      </p>

      <h3 className="skills-title">Skills & Tools</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <div className="label">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
