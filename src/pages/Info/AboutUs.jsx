import React from 'react';
import HeaderPrincipal from '../../components/Header/HeaderPrincipal';
import styles from './AboutUs.module.css';
import nosotrosImage from '../../assets/images/nosotros.jpg';
import BackButton from '../../components/BackButton/BackButton';

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <HeaderPrincipal />
      
      <main className={styles.mainContent}>
        <div className={styles.textSection}>
          <h1 className={styles.mainTitle}>SOBRE NOSOTROS</h1>
          <h2 className={styles.nameTitle}>EVALSALUD</h2>
          
          <div className={styles.textColumns}>
            <div className={styles.column}>
              <h3 className={styles.sectionTitle}>Cómo trabajamos</h3>
              <p className={styles.description}>
                Nuestro enfoque es el resultado directo de nuestra pasión por la salud digital. 
                Combinamos marcos de evaluación estandarizados con análisis personalizados 
                para garantizar que tu aplicación cumpla con los más altos estándares.
              </p>
            </div>
            
            <div className={styles.column}>
              <h3 className={styles.sectionTitle}>Nuestro servicio</h3>
              <p className={styles.description}>
                Plataforma especializada en evaluación de aplicaciones de salud digital. 
                Nuestra metodología combina rigor científico con un enfoque práctico, 
                ofreciendo recomendaciones personalizadas para cada proyecto.
              </p>
            </div>
          </div>
        </div>
        
        {/* Imagen a todo ancho */}
        <div className={styles.fullWidthImage}>
          <img 
            src={nosotrosImage} 
            alt="Equipo EvalSalud" 
            className={styles.aboutImage}
          />
        </div>
        
        {/* Espacio en blanco para el botón */}
        <div className={styles.buttonSpace}></div>
      </main>
      <BackButton />
    </div>
  );
};

export default AboutUs;