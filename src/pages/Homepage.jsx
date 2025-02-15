import React, { useEffect, useRef } from 'react'
import "../styles/Homepage.css"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import TechStack from '../components/TechStack'
import ScrollingText from '../components/ScrollingText'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const shapes = heroRef.current.querySelectorAll('.shape');
    const hero = heroRef.current;
    const portfolioSection = portfolioRef.current;
    
    if (!portfolioSection) return; // Add safety check

    const heading = portfolioSection.querySelector('.portfolio-heading');
    const subheading = portfolioSection.querySelector('.portfolio-subheading');
    const divider = portfolioSection.querySelector('.portfolio-divider');
    const image = portfolioSection.querySelector('.portfolio-image');

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

    const portfolioSections = document.querySelectorAll('.portfolio-section');
    
    // Function to create portfolio section animations
    const createPortfolioAnimation = (section, index) => {
      const elements = {
        heading: section.querySelector('.portfolio-heading'),
        subheading: section.querySelector('.portfolio-subheading'),
        divider: section.querySelector('.portfolio-divider'),
        image: section.querySelector('.portfolio-image'),
        floatingElements: section.querySelectorAll('.floating-element')
      };

      // Set initial positions - different for each section
      gsap.set([elements.heading, elements.subheading], { 
        opacity: 0,
        y: 50
      });
      gsap.set(elements.divider, { 
        scaleY: 0,
        opacity: 0
      });
      gsap.set(elements.image, { 
        opacity: 0,
        x: index === 0 ? 100 : -100  // Come from right in first section, left in second
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(elements.heading, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(elements.subheading, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(elements.divider, {
        scaleY: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.4")
      .to(elements.image, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.6");

      // Add floating elements animation
      elements.floatingElements.forEach((el, i) => {
        // Initial reveal animation
        tl.to(el, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out"
        }, "-=0.8");

        // Continuous floating animation
        gsap.to(el, {
          y: `random(-20, 20)`,
          x: `random(-20, 20)`,
          rotation: `random(-15, 15)`,
          duration: `random(3, 5)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3
        });

        // Mouse movement parallax
        section.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const rect = section.getBoundingClientRect();
          const relX = clientX - rect.left;
          const relY = clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          gsap.to(el, {
            x: (relX - centerX) * 0.05 * (i + 1),
            y: (relY - centerY) * 0.05 * (i + 1),
            duration: 1,
            ease: "power2.out"
          });
        });
      });
    };

    // Pass index to the animation function
    portfolioSections.forEach((section, index) => createPortfolioAnimation(section, index));

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
      <section className="portfolio-section" ref={portfolioRef}>
        <div className="portfolio-text" data-cursor="view">
          <div className="floating-element floating-circle"></div>
          <div className="floating-element floating-ring"></div>
          <h2 className="portfolio-heading">From</h2>
          <p className="portfolio-subheading">Seamless commerce</p>
        </div>
        <div className="portfolio-divider"></div>
        <div className="portfolio-image">
          <img src="/public/laptop-mockup1.png" alt="E-commerce Project" />
        </div>
      </section>
      <section className="portfolio-section">
        <div className="portfolio-image">
          <img src="/laptop-mockup2.png" alt="Complex Design Project" />
        </div>
        <div className="portfolio-divider"></div>
        <div className="portfolio-text">
          <div className="floating-element floating-circle"></div>
          <div className="floating-element floating-ring"></div>
          <h2 className="portfolio-heading">To</h2>
          <p className="portfolio-subheading">Timeless aesthetics</p>
        </div>
      </section>
      <ScrollingText />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Homepage