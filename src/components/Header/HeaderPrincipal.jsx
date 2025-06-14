import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeaderPrincipal.module.css';
import logo from '../../assets/logos/logo.png';

const HeaderPrincipal = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img 
          src={logo} 
          alt="EVALSALUD Logo" 
          className={styles.logo}
          onClick={() => navigate('/')} // Logo lleva al home
          style={{cursor: 'pointer'}}
        />
      </div>
      
      <nav className={styles.nav}>
        <button 
          onClick={() => navigate('/aboutus')} 
          className={styles.navLink}
        >
          SOBRE NOSOTROS
        </button>
        
        <button 
          onClick={() => navigate('/mejoras')}
          className={styles.navLink}
        >
          MEJORAS
        </button>
        
        <button 
          onClick={() => navigate('/contacto')}
          className={styles.navLink}
        >
          CONTACTO
        </button>
      </nav>
      
      <button 
        onClick={() => navigate('/intro')}
        className={styles.primaryButton}
      >
        COMENZAR EVALUACIÓN
      </button>
    </header>
  );
};

export default HeaderPrincipal;




