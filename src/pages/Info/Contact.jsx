import React from 'react';
import HeaderPrincipal from '../../components/Header/HeaderPrincipal';
import styles from './Contact.module.css';
import mapaImage from '../../assets/images/mapa.png';
import BackButton from '../../components/BackButton/BackButton';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <HeaderPrincipal />
      
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>CONTACTO</h1>
        
        <div className={styles.contactGrid}>
          {/* Columna izquierda: Información */}
          <div className={styles.infoColumn}>
            <div className={styles.contactCard}>
              <FaMapMarkerAlt className={styles.icon} />
              <h3>Dirección</h3>
              <p>ETSIT, Avenida Complutense 30<br />28040 Madrid, España</p>
            </div>
            
            <div className={styles.contactCard}>
              <FaPhone className={styles.icon} />
              <h3>Teléfono</h3>
              <p>+34 123 456 789</p>
            </div>
            
            <div className={styles.contactCard}>
              <FaEnvelope className={styles.icon} />
              <h3>Email</h3>
              <p>contacto@evalsalud.com</p>
            </div>
            
            <div className={styles.contactCard}>
              <FaClock className={styles.icon} />
              <h3>Horario</h3>
              <p>Lunes a Viernes: 9:00 - 18:00</p>
            </div>
          </div>
          
          {/* Columna derecha: Mapa */}
          <div className={styles.mapColumn}>
            <img 
              src={mapaImage} 
              alt="Ubicación ETSIT" 
              className={styles.mapImage}
            />
            <div className={styles.mapOverlay}>
              <p>¡Visítanos en la ETSIT!</p>
            </div>
          </div>
        </div>
      </main>
      
      <BackButton />
    </div>
  );
};

export default Contact;