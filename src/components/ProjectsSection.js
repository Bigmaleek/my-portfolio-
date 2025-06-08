import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SmartChat AI',
    description: 'An AI chatbot app built with Flutter, integrated with OpenAI GPT and Firebase.',
    tech: ['Flutter', 'OpenAI', 'Firebase'],
    link: '#',
  },
  {
    title: 'Lost & Found System',
    description: 'Full-stack app for reporting and managing lost items using React, Node, and MongoDB.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Travel Smart Website',
    description: 'A responsive travel website for planning trips with clean UI and smooth navigation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtext">A glimpse into some of the work I've built</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-link">
              View Project ↗
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
