import React, { useEffect, useRef } from 'react';
import { FaFigma, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaBootstrap, FaGithub, FaGit } from 'react-icons/fa';
import { SiCanva, SiExpress, SiMongodb } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import '../styles/TechStack.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    tl.to(slider, {
      x: `-${slider.offsetWidth / 2}px`,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  const icons = [
    <FaFigma />, <SiCanva />, <FaHtml5 />, <FaCss3Alt />, 
    <FaJs />, <FaNodeJs />, <FaReact />, <SiExpress />, 
    <SiMongodb />, <FaBootstrap />, <RiTailwindCssFill />, 
    <FaGithub />, <FaGit />
  ];

  return (
    <div className="tech-stack-container" ref={containerRef}>
      <div className="slider-track" ref={sliderRef}>
        {icons.map((icon, index) => (
          <div key={`icon-${index}`} className="icon-wrapper">
            {icon}
          </div>
        ))}
        {/* Duplicate icons for seamless loop */}
        {icons.map((icon, index) => (
          <div key={`icon-dup-${index}`} className="icon-wrapper">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
