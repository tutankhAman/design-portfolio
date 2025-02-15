import React, { useEffect, useRef } from 'react';
import '../styles/ScrollingText.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      x: '-20%',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
        ease: 'none'
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="scrolling-text-container" ref={containerRef}>
      <div className="text-wrapper" ref={textRef}>
        <h2>From Vision to Interaction</h2>
        <h2>From Vision to Interaction</h2>
        <h2>From Vision to Interaction</h2>
      </div>
    </div>
  );
};

export default ScrollingText;
