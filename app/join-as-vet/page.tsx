'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Updated import for Next.js 14
import Navbar from '../components/Navbar';
import styles from './page.module.css';
import Mailing from '../components/mailing';
import { db } from '../config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const JoinVet = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [especies, setEspecies] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [cedula, setCedula] = useState('');
  const [notification, setNotification] = useState('');
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = { name, email, phone, experience, especies, disponibilidad, services, cedula };

    try {
      const docRef = await addDoc(collection(db, 'applicantsVets'), data);
      console.log('Document written with ID: ', docRef.id);
      setNotification('La información ha sido enviada. Estamos contentos de que elijas ser parte de este grupo selecto de profesionales. Pronto estaremos en contacto.');

      setTimeout(() => {
        if (isClient) {
          router.push('/');
        }
      }, 10000); //
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
        <h1 className={styles.title}>Únete como Veterinario</h1>
        <p className={styles.summary}>
          ¿Eres un veterinario buscando nuevas formas de conectar con dueños de mascotas y ofrecer tus conocimientos?<br /><br /> Call a Vet es una plataforma digital innovadora que permite a los veterinarios ofrecer consultas remotas desde cualquier lugar. <br />Beneficios incluyen:
          <br /><br />- <b>Flexibilidad:</b> Ajusta tus horarios y ofrece consultas remotas para equilibrar vida personal y profesional.
          <br />- <b>Atención de clientela:</b> Expande tus servicios y conecta con dueños de mascotas en todo el mundo.
          <br />- <b>Seguro y simple:</b> Plataforma fácil de usar y segura.
          <br />- <b>Ingresos extra:</b> Aumenta tus ganancias sin costos adicionales.
          <br />- <b>Comunidad:</b> Únete a una comunidad de profesionales apasionados.
          <br />- <b>Proyección internacional:</b> Próximamente disponible globalmente.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Escribe tu nombre completo"
            required
            className={styles.input}
          />
          <label className={styles.label}>Correo Electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Escribe tu correo electrónico aquí"
            required
            className={styles.input}
          />
          <label className={styles.label}>Teléfono:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ingresa tu número de teléfono a 10 dígitos"
            pattern="[0-9]{10}"
            required
            className={styles.input}
          />
          <label className={styles.label}>Experiencia:</label>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Describe tu experiencia como veterinario"
            required
            className={styles.textarea}
          />
          <label className={styles.label}>Especies:</label>
          <input
            type="text"
            value={especies}
            onChange={(e) => setEspecies(e.target.value)}
            placeholder="Nombra las especies con las que trabajas"
            required
            className={styles.input}
          />
          <label className={styles.label}>Disponibilidad:</label>
          <select
            value={disponibilidad}
            onChange={(e) => setDisponibilidad(e.target.value)}
            className={styles.input}
          >
            <option value="" disabled>Selecciona una opción</option>
            <option value="full time">Tiempo completo</option>
            <option value="mid time">Medio tiempo</option>
            <option value="occasional">Ocasional</option>
          </select>

          <label className={styles.label}>Cédula Profesional:</label>
          <input
            type="text"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            placeholder="Ingresa tu cédula profesional"
            pattern="[0-9]{1,8}"
            required
            className={styles.input}
          />
          <label className={styles.label}>Selecciona los servicios que podrías cubrir con base en tu experiencia profesional:</label>
          <div className={styles.services}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value="Aparato Digestivo"
                checked={services.includes('Aparato Digestivo')}
                onChange={handleServiceChange}
              />
              Aparato Digestivo
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value="Aparato Locomotor"
                checked={services.includes('Aparato Locomotor')}
                onChange={handleServiceChange}
              />
              Aparato Locomotor
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value="Aparato Respiratorio"
                checked={services.includes('Aparato Respiratorio')}
                onChange={handleServiceChange}
              />
              Aparato Respiratorio
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value="Dental Oral"
                checked={services.includes('Dental Oral')}
                onChange={handleServiceChange}
              />
              Dental Oral
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value="Dermatología"
                checked={services.includes('Dermatología')}
                onChange={handleServiceChange}
              />
              Dermatología
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value="Diagnóstico"
                checked={services.includes('Diagnóstico')}
                onChange={handleServiceChange}
              />
              Diagnóstico
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value="Examen Oftálmico"
                checked={services.includes('Examen Oftálmico')}
                onChange={handleServiceChange}
              />
              Examen Oftálmico
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value="Medicina General"
                checked={services.includes('Medicina General')}
                onChange={handleServiceChange}
              />
              Medicina General
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value="Medicina Preventica"
                checked={services.includes('Medicina Preventica')}
                onChange={handleServiceChange}
              />
              Medicina Preventica
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value="Potros"
                checked={services.includes('Potros')}
                onChange={handleServiceChange}
              />
              Potros
              <span className={styles.checkmark}></span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value="Reproducción"
                checked={services.includes('Reproducción')}
                onChange={handleServiceChange}
              />
              Reproducción
              <span className={styles.checkmark}></span>
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

export default JoinVet;