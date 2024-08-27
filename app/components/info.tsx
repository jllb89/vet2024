'use client';

import React, { useState, useEffect } from 'react';
import styles from './info.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const boxes = document.querySelectorAll(`.${styles.box1}, .${styles.box2}, .${styles.box3}, .${styles.boxx}`);

    boxes.forEach((box, index) => {
      gsap.fromTo(box, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 90%", // Adjust this value to start the effect earlier or later
            end: "bottom top",
            scrub: true,
          }
        }
      );
    });
  }, []);

  const handleButtonClick = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <div className={styles.info}>
      <div className={styles.box1}>
        <img src="/s1.png" alt="Box 1" className={styles.image} />
        <div className={styles.content}>
          <h3 className={styles.title1}>¿Qué es Call a Vet?</h3>
          <p className={styles.text}>Call a Vet es un servicio de asistencia veterinaria impulsado por IA, disponible directamente en WhatsApp. Sin descargas innecesarias, nuestro asistente te proporciona respuestas personalizadas y contacto al momento con veterinarios expertos para consultas por videollamada.</p>
          <p className={styles.additionalText}>Rápido, fácil y eficaz, nuestro servicio transforma la manera de cuidar la salud de tu animal de compañía, ofreciendo asesoramiento especializado al instante.</p>
          <a href="https://wa.link/2lfoqu" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>Contáctanos ahora</a>
        </div>
      </div>
      <div className={styles.box2}>
        <img src="/s2.png" alt="Box 2" className={styles.image} />
        <h3 className={styles.title2}>Dispón de nuestra red de expertos</h3>
        <p className={styles.text}>Accede a un soporte veterinario experto enviando solo un mensaje. Call a Vet te conecta con un amplio espectro de especialidades veterinarias, incluyendo diagnóstico, medicina preventiva, cuidado dental, entre otros.</p>
        <p className={styles.additionalText}>¿Requieres asistencia veterinaria inmediata?</p>
        <a href="https://wa.link/2lfoqu" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>Recibe orientación de expertos</a>
      </div>
      <div className={styles.box3}>
        <img src="/s3.png" alt="Box 3" className={styles.image} />
        <h3 className={styles.title3}>Encuentra lo mejor para tu animal de compañía en nuestra tienda</h3>
        <p className={styles.text}>Explora nuestra tienda y elige entre una variedad de productos y servicios diseñados para apoyar la salud de tu animal de compañía.</p>
        <p className={styles.additionalText}>Calidad y cuidado a tu alcance.</p>
        <button className={styles.ctaButton} onClick={handleButtonClick}>Ir a la tienda</button>
      </div>

      <div className={styles.boxx}>
        <h3 className={styles.title4}>Únete a Call a Vet</h3>
        <p className={styles.text}>Transforma tu carrera veterinaria con Call a Vet. Nuestra plataforma digital te permite ofrecer orientación veterinaria remota, adaptar tu horario, y aumentar tus ingresos desde donde sea que estés. </p>
        <p className={styles.additionalText}>Disfruta de seguridad, simplicidad y la oportunidad de ser parte de una comunidad innovadora que lleva la atención veterinaria al futuro. </p>
        <a href="/join-as-vet" className={styles.ctaButton}>Sé parte de Call a Vet</a>
      </div>
      <div className={styles.boxx}>
        <h3 className={styles.title4}>¿Tienes una clínica veterinaria?</h3>
        <p className={styles.text}>Amplía tu clientela y aumenta tus ingresos ofreciendo servicios en nuestra plataforma sin costos adicionales. Conéctate con nuevos mercados y mantente a la vanguardia de la tecnología en atención veterinaria. </p>
        <p className={styles.additionalText}>¡Haz parte de nuestra expansión internacional y lleva tus servicios a más clientes que nunca antes!</p>
        <a href="/join-as-attention-center" className={styles.ctaButton}>Intégrate a la plataforma</a>
      </div>
      <div className={styles.boxx}>
        <h3 className={styles.title4}>¿Eres proveedor de productos o servicios?</h3>
        <p className={styles.text}>Únete a nuestra plataforma dedicada a proveedores de servicios y productos para équidos. Conéctate con una red global de aficionados y profesionales del sector ecuestre, amplía tu mercado, y maximiza tus ingresos sin costos adicionales.</p>
        <p className={styles.additionalText}>Aprovecha la oportunidad de crecer internacionalmente y transforma tu alcance en el emocionante mundo de los équidos.</p>
        <a href="/suppliers" className={styles.ctaButton}>Súmate al proyecto</a>
      </div>

      {showNotification && (
        <div className={styles.notification}>
          <span>Próximamente</span>

        </div>
      )}
    </div>
  );
};

export default Info;
