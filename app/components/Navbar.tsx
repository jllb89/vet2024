'use client';

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSignInClick = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <a href="/">
          <img src="/logo.svg" alt="Logo" className={styles.logo} />
        </a>
      </div>
      <div className={styles.navLinks}>
        <a href="#" className={styles.signInButton} onClick={handleSignInClick}>
          Iniciar Sesión
        </a>
      </div>
      {showNotification && (
        <div className={styles.notification}>
          <span>Próximamente</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
