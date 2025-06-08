import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection'; 
import Footer from './components/Footer'; // ✅ corre
import './App.css';

function App() {
  return (
    <div>
      <HeroSection />
      <section id="about"><AboutSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="testimonials"><TestimonialsSection /></section>
      <section id="contact"><ContactSection /></section>
      <Footer/>
    </div>
  );
}

export default App;