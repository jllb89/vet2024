'use client';

import React, { useEffect } from 'react';
import styles from './Header.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const icons = [
  'p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png', 'p6.png', 'p7.png', 'p8.png'
];

const Header: React.FC = () => {
  useEffect(() => {
    const iconElements = document.querySelectorAll(`.${styles.icon}`);
    
    // Set initial random positions within the viewport
    iconElements.forEach(icon => {
      gsap.set(icon, {
        x: () => Math.random() * (window.innerWidth - 2000),
        y: () => Math.random() * (window.innerHeight - 1000)
      });
    });

    // Animate the icons infinitely with random movement
    iconElements.forEach(icon => {
      const moveIcon = () => {
        let dx = Math.random() * 2 - 1; // random direction for x
        let dy = Math.random() * 2 - 1; // random direction for y
        const speed = 500 + Math.random() * 10; // random speed

        const bounce = (el: HTMLElement) => {
          gsap.to(el, {
            x: `+=${dx * speed}`,
            y: `+=${dy * speed}`,
            duration: 20 + Math.random() * 30, // Speed up the movement
            ease: 'none',
            onUpdate: () => {
              const bounds = el.getBoundingClientRect();
              if (bounds.left < 0 || bounds.right > window.innerWidth) {
                dx = -dx; // Reverse direction on x-axis
              }
              if (bounds.top < 0 || bounds.bottom > window.innerHeight) {
                dy = -dy; // Reverse direction on y-axis
              }
            },
            onComplete: () => bounce(el),
          });
        };

        bounce(icon as HTMLElement);
      };

      moveIcon();
    });

    // Parallax effect for title, subtitle, and button
    
    gsap.to(`.${styles.title}`, {
      yPercent: -60,
      scrollTrigger: {
        trigger: `.${styles.header}`,
        start: 'top 10%', // Start the effect earlier
        end: 'bottom top',
        scrub: true,
      },
    });
    
    gsap.to(`.${styles.subtitle}`, {
      yPercent: -70,
      scrollTrigger: {
        trigger: `.${styles.header}`,
        start: 'top 10%', // Start the effect earlier
        end: 'bottom top',
        scrub: true,
      },
    });
    
    gsap.to(`.${styles.ctaButton}`, {
      yPercent: -100,
      scrollTrigger: {
        trigger: `.${styles.header}`,
        start: 'top 0%', // Start the effect earlier
        end: 'bottom top',
        scrub: true,
      },
    });
    
  }, []);

  const handleButtonClick = () => {
    window.location.href = '/join-as-vet';
  };

  return (
    <header className={styles.header}>
      <img src="/header.svg" alt="Header SVG" className={styles.headerImage} />
      <div className={styles.texts}>
        <h1 className={styles.title}>La plataforma inteligente para el cuidado de tu animal de compañía.</h1>
        <h2 className={styles.subtitle}>Call a Vet es una plataforma impulsada por Inteligencia Artificial que dispone para ti atención veterinaria especializada a un mensaje de distancia.<br></br><br></br>
        Si eres un profesional de la medicina veterinaria que busca incrementar su actividad laboral, ingresos y pacientes desde el lugar que desees trabajar, esta plataforma es para ti.</h2>
      </div>
      <button className={styles.ctaButton} onClick={handleButtonClick}>¡Únete Ya!</button>
      <a href="/" className={styles.smallLink}>Términos y condiciones</a>
      {icons.map((icon, index) => (
        <img key={index} src={`/${icon}`} alt={`Icon ${index + 1}`} className={styles.icon} />
      ))}
    </header>
  );
};

export default Header;
