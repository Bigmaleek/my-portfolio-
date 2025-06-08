import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback: "Adrian's attention to detail and code quality impressed me from day one. Highly recommended!",
    },
    {
      name: "John Smith",
      feedback: "Fast delivery, clear communication, and amazing UI. One of the best devs I've worked with.",
    },
    {
      name: "Maria Lopez",
      feedback: "Delivered exactly what I envisioned. Very professional and creative developer.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonial-slider">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`testimonial-item ${index === current ? 'active' : ''}`}
          >
            <p className="feedback">"{t.feedback}"</p>
            <h4 className="name">- {t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
