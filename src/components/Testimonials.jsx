import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Testimonials.css';

const testimonials = [
  {
    text: "Aman completely transformed our website’s user experience! He took the time to understand and created an intuitive design that made navigation effortless",
    author: "Koustubh Pande",
    position: "Web Developer"
  },
  {
    text: "Aman did a great job on our website. He was very professional and delivered on time. We will definitely be working with him again!",
    author: "Masoom Raza",
    position: "Owner of AEC"
  },
  {
    text: "Innovative solutions, clean code, and beautiful design - exactly what we needed.",
    author: "Jessica Kumar",
    position: "Developer of Delivo"
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
