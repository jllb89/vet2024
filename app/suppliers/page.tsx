'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import styles from './page.module.css';
import Mailing from '../components/mailing';
import { db } from '../config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const JoinSupplier = () => {
  const [businessName, setBusinessName] = useState('');
  const [personInCharge, setPersonInCharge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [servicesDescription, setServicesDescription] = useState('');
  const [notification, setNotification] = useState('');
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = { businessName, personInCharge, email, phone, servicesDescription };

    try {
      const docRef = await addDoc(collection(db, 'applicantsSuppliers'), data);
      console.log('Document written with ID: ', docRef.id);
      setNotification('La información ha sido enviada. Estamos contentos de que elijas ser parte de este grupo selecto de profesionales. Pronto estaremos en contacto.');

      setTimeout(() => {
        if (isClient) {
          router.push('/');
        }
      }, 5000); // Redirect after 5 seconds
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Únete como Proveedor</h1>
        <p className={styles.summary}>
        ¿Provees productos o servicios para équidos?<br /><br /> Únete a nuestra plataforma para ampliar tu mercado y formar parte de una red creciente en el sector ecuestre. Conéctate con una amplia red de amantes de los équidos y maximiza tus ingresos sin costos adicionales. Aprovecha la oportunidad de alcanzar clientes globalmente con nuestros planes de expansión internacional. <br /><br />¡No dejes pasar esta oportunidad de crecimiento y éxito en el emocionante mundo de los équidos!
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>Nombre del Negocio:</label>
          <input 
            type="text" 
            value={businessName} 
            onChange={(e) => setBusinessName(e.target.value)} 
            placeholder="Nombre del Negocio"
            required 
            className={styles.input}
          />
          <label className={styles.label}>Persona a Cargo de la Asociación:</label>
          <input 
            type="text" 
            value={personInCharge} 
            onChange={(e) => setPersonInCharge(e.target.value)} 
            placeholder="Persona a Cargo de la Asociación"
            required 
            className={styles.input}
          />
          <label className={styles.label}>Correo Electrónico:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Correo Electrónico"
            required 
            className={styles.input}
          />
          <label className={styles.label}>Teléfono:</label>
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="Teléfono"
            pattern="[0-9]{10}"
            required 
            className={styles.input}
          />
          <label className={styles.label}>Descripción de Servicios:</label>
          <textarea 
            value={servicesDescription} 
            onChange={(e) => setServicesDescription(e.target.value)} 
            placeholder="Descripción de Servicios"
            required 
            className={styles.textarea}
          />
          <button type="submit" className={styles.ctaButton}>Enviar</button>
        </form>
        {notification && <div className={styles.notification}>{notification}</div>}
      </div>
      <Mailing />
    </div>
  );
};

export default JoinSupplier;
