import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Testimonials.css';

const testimonials = [
  {
    text: "Aman brought our vision to life with exceptional attention to detail and creative flair.",
    author: "Sarah Chen",
    position: "Product Manager"
  },
  {
    text: "The perfect blend of technical expertise and design sensibility. Outstanding work!",
    author: "Michael Ross",
    position: "Creative Director"
  },
  {
    text: "Innovative solutions, clean code, and beautiful design - exactly what we needed.",
    author: "Jessica Kumar",
    position: "Startup Founder"
  }
];

const Testimonials = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = direction === 'left' ? -350 : 350;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="testimonials-section">
      <h2 className="section-heading">What my clients say:</h2>
      <div className="testimonials-wrapper">
        <button 
          className="nav-button prev" 
          onClick={() => scroll('left')}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
        <div className="testimonials-container" ref={containerRef}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <h3>{testimonial.author}</h3>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="nav-button next" 
          onClick={() => scroll('right')}
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
