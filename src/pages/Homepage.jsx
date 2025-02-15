import React, { useEffect, useRef } from 'react'
import "../styles/Homepage.css"
import gsap from 'gsap'
import TechStack from '../components/TechStack'

const Homepage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const shapes = heroRef.current.querySelectorAll('.shape');
    const hero = heroRef.current;
    
    // Floating animation for shapes
    shapes.forEach(shape => {
      gsap.to(shape, {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-10, 10)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      shapes.forEach((shape, index) => {
        const speed = 0.2 + (index * 0.1);
        gsap.to(shape, {
          y: scrolled * speed,
          duration: 0.5,
          ease: 'power1.out'
        });
      });
    });

    // Mouse move effect
    hero.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) * 0.05;
      const y = (clientY - window.innerHeight / 2) * 0.05;

      shapes.forEach((shape, index) => {
        const depth = 1 + (index * 0.5);
        gsap.to(shape, {
          x: x * depth,
          y: y * depth,
          duration: 1,
          ease: 'power2.out'
        });
      });
    });

    return () => {
      window.removeEventListener('scroll', () => {});
      hero.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <div className="homepage">
      <section className="hero-section" ref={heroRef}>
        <div className="hero-background"></div>
        <div className="shape circle" data-speed="0.5"></div>
        <div className="shape square" data-speed="0.8"></div>
        <div className="shape triangle" data-speed="0.6"></div>
        <div className="shape ring" data-speed="0.7"></div>
        <div className="shape dot-grid" data-speed="0.3"></div>
      </section>
      <section className="title-section">
        <h1 className="designer-title">UI-UX Designer</h1>
        <h1 className="developer-title">{"<"}developer{">"}</h1>
      </section>
      <section className="intro-section">
        <p>Crafting <span className="dancing-text">intuitive experiences</span>, one line of code at a time.<br></br> Blending <span className="logic-text">logic</span> with <span className="creative-text">creativity</span>, I bring ideas to life through design and development.</p>
      </section>
      <TechStack />
    </div>
  )
}

export default Homepage