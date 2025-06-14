import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Intermediate.module.css';
import logo from '../../assets/logos/logo.png';
import ichomImg from '../../assets/images/ichom.png';
import niceImg from '../../assets/images/nice.png';
import imdrfImg from '../../assets/images/imdrf.png';
import BackButton from '../../components/BackButton/BackButton';

const PasoIntermedio = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { marco } = location.state || {};

  const marcoInfo = {
    ICHOM: {
      nombre: 'ICHOM',
      imagen: ichomImg,
      descripcion: 'Se recomienda ICHOM porque la aplicación requiere validación clínica o está centrada en enfermedades crónicas o salud mental. ICHOM permite medir resultados centrados en el paciente y establecer métricas estandarizadas.'
    },
    NICE: {
      nombre: 'NICE',
      imagen: niceImg,
      descripcion: 'Se recomienda NICE porque la aplicación es de bajo o medio riesgo, y no afecta decisiones clínicas críticas. NICE ofrece un marco útil para evaluar tecnologías sanitarias con impacto moderado.'
    },
    IMDRF: {
      nombre: 'IMDRF',
      imagen: imdrfImg,
      descripcion: 'Se recomienda IMDRF porque la aplicación tiene alto riesgo o está relacionada con el diagnóstico y monitoreo de enfermedades. Este marco se centra en criterios regulatorios y de seguridad para dispositivos médicos y software clínico.'
    }
  };

  const info = marcoInfo[marco];

  return (
    <div className={styles.fullPageContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img 
            src={logo} 
            alt="EVALSALUD Logo" 
            className={styles.logo}
            onClick={() => navigate('/')} 
            style={{ cursor: 'pointer' }}
          />
        </div>

        <nav className={styles.nav}>
          <button onClick={() => navigate('/aboutus')} className={styles.navLink}>SOBRE NOSOTROS</button>
          <button onClick={() => navigate('/mejoras')} className={styles.navLink}>MEJORAS</button>
          <button onClick={() => navigate('/contacto')} className={styles.navLink}>CONTACTO</button>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <h1 className={styles.title}>Marco recomendado</h1>
        <div className={styles.marcoContainer}>
          <img src={info.imagen} alt={`Logo ${info.nombre}`} className={styles.marcoImage} />
          <div className={styles.marcoText}>
            <h2>{info.nombre}</h2>
            <p>{info.descripcion}</p>
          </div>
        </div>
        <div className={styles.bottomButtonContainer}>
          <button className={styles.primaryButton} onClick={() => navigate('/step2')}>CONTINUAR EVALUACIÓN</button>
        </div>
        <BackButton />
      </main>
    </div>
  );
};

export default PasoIntermedio;
