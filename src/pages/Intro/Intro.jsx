import React from 'react';
import styles from './Intro.module.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logos/logo.png';
import icon1 from '../../assets/images/necesitas.png'; 
import icon2 from '../../assets/images/tiempo.png';
import icon3 from '../../assets/images/obtienes.png';
import BackButton from '../../components/BackButton/BackButton';

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.fullPageContainer}>
      <header className={styles.intro}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="EVALSALUD Logo" className={styles.logo} />
        </div>
        
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>SOBRE NOSOTROS</a>
          <a href="#improvements" className={styles.navLink}>MEJORAS</a>
          <a href="#contact" className={styles.navLink}>CONTACTO</a>
        </nav>
        
        <button 
          onClick={() => navigate('/step1')}
          className={styles.primaryButton}
        >
          COMENZAR EVALUACIÓN
        </button>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <h1 className={styles.mainTitle}>
            Antes de empezar,<br />¿qué encontrarás a continuación?
          </h1>

          <p className={styles.description}>
            Esta herramienta te ayudará a seleccionar el marco de evaluación y las herramientas más adecuadas 
            para validar tu aplicación de salud digital. Para ofrecerte una recomendación personalizada, 
            te haremos algunas preguntas breves sobre tu aplicación y tus objetivos.
          </p>
        </div>


      <div className={styles.gridWrapper}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <img src={icon1} alt="Qué necesitas" className={styles.tableImage} />
            <h3 className={styles.tableTitle}>¿Qué necesitas?</h3>
            <ul className={styles.bulletList}>
              <li>Saber el tipo de aplicación que estás desarrollando</li>
              <li>Tener claro qué criterios evaluar</li>
            </ul>
          </div>

          <div className={styles.gridItem}>
            <img src={icon2} alt="Duración" className={styles.tableImage} />
            <h3 className={styles.tableTitle}>¿Cuánto durará?</h3>
            <ul className={styles.bulletList}>
              <li>No te robaremos más de 5 minutos!</li>
            </ul>
          </div>

          <div className={styles.gridItem}>
            <img src={icon3} alt="Resultados" className={styles.tableImage} />
            <h3 className={styles.tableTitle}>¿Qué obtendrás?</h3>
            <ul className={styles.bulletList}>
              <li>Marco de evaluación recomendado</li>
              <li>Lista de herramientas específicas</li>
              <li>Resumen visual justificativo</li>
            </ul>
          </div>
        </div>
       </div>

        <div className={styles.finalSection}>
          <p className={styles.finalText}>Y ahora sí, si estás preparado...</p>
          <div className={styles.buttonsContainer}>
            <button 
              onClick={() => navigate('/step1')}
              className={styles.startButton}
            >
              COMENZAR EVALUACIÓN
            </button>
          </div>
        </div>
        <BackButton />
      </main>
    </div>
  );
};

export default Intro;
