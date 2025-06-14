import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';
import flechaVolver from '../../assets/images/volver.png'; 

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      className={styles.backButton}
    >
      <img 
        src={flechaVolver} 
        alt="Volver" 
        className={styles.backIcon}
      />
      Volver
    </button>
  );
};

export default BackButton;