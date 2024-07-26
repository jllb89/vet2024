import React from 'react';
import styles from './mailing.module.css';

const Mailing = () => {
  return (
    <div className={styles.mailing}>
      <div className={styles.container}>
        <div className={styles.mailingContainer}>
          <h3 className={styles.title}>Mantente conectado.</h3>
          <p className={styles.text}>
            Suscríbete a nuestro boletín para recibir actualizaciones, consejos veterinarios y noticias relevantes directamente en tu correo electrónico y obtén promociones exclusivas.
            Libre de spam.
          </p>
          <div className={styles.form}>
            <input type="email" placeholder="Tu correo electrónico" className={styles.input} />
            <button className={styles.ctaButton}>Suscribirse</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mailing;
