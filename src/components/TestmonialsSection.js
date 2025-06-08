import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at InnovateX',
    feedback: 'Working with Mohammed was seamless. He delivered fast, clean code and exceeded our expectations!',
  },
  {
    name: 'David Kim',
    role: 'CEO at TechCore',
    feedback: 'His UI/UX sense is top-notch. Our users loved the new interface he built for us.',
  },
  {
    name: 'Amina Yusuf',
    role: 'CTO at EduLabs',
    feedback: 'Reliable, creative, and always on time. Mohammed made a huge impact on our development cycle.',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <p className="section-subtext">What clients and teammates say about me</p>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="testimonial-card"
          >
            <p className="feedback">"{item.feedback}"</p>
            <div className="person">
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
