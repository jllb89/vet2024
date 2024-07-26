'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import styles from './page.module.css';
import Mailing from '../components/mailing';
import { db } from '../config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const JoinCenter = () => {
  const [businessName, setBusinessName] = useState('');
  const [personInCharge, setPersonInCharge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [notification, setNotification] = useState('');

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = { businessName, personInCharge, email, phone, address, services };

    try {
      const docRef = await addDoc(collection(db, 'applicantsCareCenters'), data);
      console.log('Document written with ID: ', docRef.id);
      setNotification('La información ha sido enviada. Estamos contentos de que elijas ser parte de este grupo selecto de profesionales. Pronto estaremos en contacto.');

      setTimeout(() => {
        router.push('/');
      }, 5000); // Redirect after 5 seconds
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setServices(prev =>
      checked ? [...prev, value] : prev.filter(service => service !== value)
    );
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Únete como Centro de Atención</h1>
        <p className={styles.summary}>
          ¿Tienes un centro de atención veterinaria? <br /><br />Únete a Call a Vet, una plataforma digital para ampliar tu cartera de clientes sin costos adicionales. Ofrece servicios de calidad, mantente al día con la innovación en atención veterinaria y genera ingresos adicionales. Disfruta de la proyección internacional de nuestra plataforma, que pronto estará disponible globalmente.<br /><br /> ¡No pierdas esta oportunidad de ser parte de la innovación en la atención veterinaria!
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
          <label className={styles.label}>Dirección:</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            placeholder="Dirección"
            required 
            className={styles.input}
          />
          <label className={styles.label}>Servicios:</label>
          <div className={styles.services}>
            <label>
              <input 
                type="checkbox" 
                value="consulta general" 
                checked={services.includes('consulta general')} 
                onChange={handleServiceChange} 
              />
              Consulta general
            </label>
            <label>
              <input 
                type="checkbox" 
                value="cirugía" 
                checked={services.includes('cirugía')} 
                onChange={handleServiceChange} 
              />
              Cirugía
            </label>
            <label>
              <input 
                type="checkbox" 
                value="urgencias" 
                checked={services.includes('urgencias')} 
                onChange={handleServiceChange} 
              />
              Urgencias
            </label>
          </div>
          <button type="submit" className={styles.ctaButton}>Enviar</button>
        </form>
        {notification && <div className={styles.notification}>{notification}</div>}
      </div>
      <Mailing />
    </div>
  );
};

export default JoinCenter;
