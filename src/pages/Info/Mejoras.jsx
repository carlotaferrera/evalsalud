import React, { useState } from 'react';
import HeaderPrincipal from '../../components/Header/HeaderPrincipal';
import styles from './Mejoras.module.css';
import BackButton from '../../components/BackButton/BackButton';

const Improvements = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: '',
    type: 'feature'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("¡Gracias por tus sugerencias!");
    setFormData({
      name: '',
      email: '',
      suggestion: '',
      type: 'feature'
    });
  };

  return (
    <div className={styles.fullPageContainer}>
      <HeaderPrincipal />
      
      <main className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <h1 className={styles.mainTitle}>
            ¿QUÉ MEJORARÍAS?
          </h1>
          
          <p className={styles.description}>
            Tu opinión nos ayuda a hacer EvalSalud más útil. ¡Déjanos tus sugerencias!
          </p>
        </div>
        
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre (opcional)</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className={styles.inputField}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email (opcional)</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={styles.inputField}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="suggestion">* Sugerencia</label>
              <textarea
                id="suggestion"
                name="suggestion"
                value={formData.suggestion}
                onChange={handleChange}
                placeholder="¿Qué añadirías, quitarías o mejorarías?"
                rows="5"
                required
                className={styles.textareaField}
              />
            </div>
            
            <div className={styles.radioGroup}>
              <p className={styles.radioTitle}>Tipo de sugerencia:</p>
              <div className={styles.radioOptions}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="type"
                    value="feature"
                    checked={formData.type === 'feature'}
                    onChange={handleChange}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioCustom}></span>
                  Añadir función
                </label>
                
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="type"
                    value="improvement"
                    checked={formData.type === 'improvement'}
                    onChange={handleChange}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioCustom}></span>
                  Mejora
                </label>
                
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="type"
                    value="bug"
                    checked={formData.type === 'bug'}
                    onChange={handleChange}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioCustom}></span>
                  Reportar error
                </label>
              </div>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              ENVIAR SUGERENCIA
            </button>
          </form>
        </div>
      </main>
      
      <BackButton />
      <div className={styles.bottomSpace}></div>
    </div>
  );
};

export default Improvements;