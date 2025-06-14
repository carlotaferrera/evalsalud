import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderPrincipal from '../../components/Header/HeaderPrincipal';
import styles from './Home.module.css';
import appImage from '../../assets/images/ordenador.png';


const Home = () => {
  const navigate = useNavigate();

  const handleStartEvaluation = () => {
    navigate('/intro');
  };
  

  return (
    <div className={styles.homeContainer}>
      <HeaderPrincipal />
      
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h1 className={styles.mainTitle}>Evaluador Multidimensional para Apps de salud</h1>
          <p className={styles.subtitle}>Guía interactiva para seleccionar marcos y herramientas de validación en salud digital</p>
          
          <div className={styles.imageContainer}>
            <div className={styles.decorativeRectangle}></div>
              <img 
                src={appImage} 
                alt="Interfaz de la aplicación" 
                className={styles.appImage}
              />
</div>
          
          <button 
            onClick={handleStartEvaluation}
            className={styles.evaluationButton}
          >
            Comenzar evaluación
          </button>
        </section>
      </main>
    </div>
  );
};

export default Home;
