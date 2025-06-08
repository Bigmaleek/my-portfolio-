import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const phrases = [
  "Transforming Concepts into Seamless User Experiences",
  "Designing Fast and Fluid Interfaces",
  "Building Smart Web Solutions with React.js",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[index];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + currentPhrase[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setText('');
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <motion.div
     initial={{ opacity: 0, y: 50 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 1 }}
    className="hero-section"
     >
      <nav>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>

      <p className="subtitle">DYNAMIC WEB MAGIC WITH REACT.JS</p>

      <div className="spotlight">
        <h1 className="typewriter-text">
          {text}
          <span className="cursor">|</span>
        </h1>
        </div>
        <p className="description">
          Hi! I'm Mohammed, a Software Developer based in Lagos.
        </p>
     

      <Link to="projects" smooth={true} duration={500}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Show my work <span className="ml-2">↗</span>
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default HeroSection;
